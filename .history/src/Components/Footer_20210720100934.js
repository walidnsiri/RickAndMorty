import React from 'react'


const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a href="" target="_blank" rel="noopener noreferrer">Bi3ou</a>
        <span className="ml-1">&copy; 2020.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="" target="_blank" rel="noopener noreferrer">Bi3ou</a>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
