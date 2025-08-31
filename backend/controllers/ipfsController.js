import { createHelia } from "helia";
import { unixfs } from "@helia/unixfs";
import { MemoryBlockstore } from "blockstore-core/memory";
import { MemoryDatastore } from "datastore-core/memory";
import crypto from "crypto";
import User from "../models/User.js";

// Helia instance
let fs;
(async () => {
  const helia = await createHelia({
    blockstore: new MemoryBlockstore(),
    datastore: new MemoryDatastore()
  });
  fs = unixfs(helia);
  console.log("✅ Helia initialized");
})();

// AES-256-CBC encryption
const encryptData = (data) => {
  const key = process.env.ENCRYPTION_KEY || "12345678901234567890123456789012";
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  let encrypted = cipher.update(data);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
};

// Store fingerprint
export const storeFingerprint = async (req, res) => {
  try {
    const { userId, fingerprintData } = req.body;
    if (!fs) return res.status(500).json({ message: "Helia not ready" });

    // Encrypt & upload
    const encrypted = encryptData(fingerprintData);
    const encoder = new TextEncoder();
    const bytes = encoder.encode(JSON.stringify(encrypted));
    const cid = await fs.addBytes(bytes);

    // Save to user
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.fingerprintCid = cid.toString();
    await user.save();

    res.status(201).json({
      success: true,
      cid: cid.toString(),
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        fingerprintCid: user.fingerprintCid
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to store fingerprint" });
  }
};

// Get fingerprint CID
export const getFingerprint = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user || !user.fingerprintCid) {
      return res.status(404).json({ message: "Fingerprint not found" });
    }
    res.json({ cid: user.fingerprintCid });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch fingerprint" });
  }
};
