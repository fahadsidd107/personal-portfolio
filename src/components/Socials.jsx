import React from "react";
import { Github,Linkedin,Twitter,Phone,Mail } from 'lucide-react';


const Social = () => {
  return (
    <div className="social">
      <a href="https://github.com/fahadsidd107" target="_blank">
        <div className="social-btn flex items-center justify-center gap-3 hover:hover:bg-github">
          <p>Github</p>
          <Github className="w-8 h-8" />
        </div>
      </a>

      <a href="https://www.linkedin.com/in/fahad-siddiqui-595484176/" target="_blank">
        <div className="social-btn flex items-center justify-center gap-2  hover:bg-linkedin">
          <p>Linkedin</p>
          <Linkedin className="w-8 h-8" />
        </div>
      </a>

      <a href="mailto:fsiddiqui107@gmail.com" target="_blank">
        <div className="social-btn flex items-center justify-center gap-9 hover:bg-gmail">
          <p>Mail</p>
          <Mail className="w-8 h-8" />
        </div>
      </a>

      <a href="https://twitter.com/Fad_Flex" target="_blank">
        <div className="social-btn flex items-center justify-center gap-4 hover:bg-twitter">
          <p>Twitter</p>
          <Twitter className="w-8 h-8" />
        </div>
      </a>

      <a href="whatsapp://send?text=Hello World!&phone=+923213730963">
        <div className="social-btn flex items-center justify-center gap-4 hover:bg-whatsapp">
          <p>Phone</p>
          <Phone className="w-8 h-8" />
        </div>
      </a>

    </div>
  );
};

export default Social;
