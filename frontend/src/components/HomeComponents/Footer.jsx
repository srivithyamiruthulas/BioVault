function Footer() {
  return (
    <footer className="bg-[url('/image.png')] bg-repeat:no bg-no-repeat bg-cover py-16 px-20 text-center md:text-left flex flex-col md:flex-row justify-between items-row m-0">
      <div>
        <h3 className="text-lg font-bold mb-2">Have questions or want a demo?</h3>
        <p className="text-lg">Email: support@biovault.org</p>
        <p className="text-lg">Phone: +91-XXXXXXXXXX</p>
        <p className="text-lg">Address: India</p>
        <div className=" mt-20 mr-200 md:mt">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} BioVault. All rights reserved.</p>
      </div>
      </div>
      
    </footer>
  )
}

export default Footer
