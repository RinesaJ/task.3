import { useState } from "react";
import "./App.css";


function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Domains
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Web Hosting
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
        Dedicated Servers
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
        Virtual Cloud Servers
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
        WordPress Hosting
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
        Email Hosting
        </button>
        <button
          className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(7)}
        >
        VPS Hosting Servers
        </button>
        <button
          className={toggleState === 8 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(8)}
        >
        Free Hosting
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
        
        <div className="cards">
            <div className="card">
              <h2>.COM</h2>
              <h4>$5.99/yr</h4>
              <p>Instead of $10.99/yr</p>
              <button2>Buy Now</button2>
            </div>
            <div className="card">
              <h2>.AI</h2>
              <h4>$55.99/yr</h4>
              <p>Instead of $10.99/yr</p>
              <button2>Buy Now</button2>
            </div>
            <div className="card">
              <h2>.NET</h2>
              <h4>$7.99/yr</h4>
              <p>Instead of $10.99/yr</p>
              <button2>Buy Now</button2>
            </div>
            <div className="card">
              <h2>.HEALTH</h2>
              <h4>$55.99/yr</h4>
              <p>Instead of $10.99/yr</p>
              <button2>Buy Now</button2>
            </div>
            <div className="card">
              <h2>.CO.UK</h2>
              <h4>$3.99/yr</h4>
              <p>Instead of $10.99/yr</p>
              <button2>Buy Now</button2>
            </div>
            <div className="card">
              <h2>.ORG</h2>
              <h4>$15.99/yr</h4>
              <p>Instead of $10.99/yr</p>
              <button2>Buy Now</button2>
            </div>
            <div className="card">
              <h2>.CO</h2>
              <h4>$26.33/yr</h4>
              <p>Instead of $10.99/yr</p>
              <button2>Buy Now</button2>
              </div>
              <div className="card">
                <h2>.SEA</h2>
                <h4>$26.33/yr</h4>
                <p>Instead of $10.99/yr</p>
                <button2>Buy Now</button2>
              </div>
            </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
            <div className="cards">
            <div className="card">
              <h2>Email Accounts</h2>
              <h5>most hosting providers require users to have their own domain name.
                 With a domain name (e.g. www.yourwebsite.com) and email account features provided
                  by your hosting company, you can create domain email accounts
                 (e.g. yourname@yourwebsite.com)</h5>
            </div>
            <div className="card">
              <h2>FTP Access</h2>
              <h5>The use of FTP lets you upload files from your local computer to your web server. 
                If you build your website using your own HTML files, you can transfer the files from your 
                computer to the web server through FTP,
                 allowing your website to be accessed through the internet</h5>

            </div>
            <div className="card">
              <h2>WordPress Support</h2>
              <h6>WordPress is an online website creation tool. It is a powerful blogging and website content management system, which is a convenient way to create and manage website. WordPress powers over 25% of websites on the internet. Most hosting providers will tell you right away if their plans are WordPress-compatible or not. The simple requirements for hosting your WordPress websites include: PHP version 7 or greater; MySQL version 5.6 or greater.</h6>
            </div>
            <div className="card">
              <h2>Types of Web Hosting Services</h2>
              <h5>Hosting options available are:
                  , Website Builders
                  , Shared Hosting
                  , Dedicated Hosting
                  , Collocated Hosting</h5>

            </div>
            <div className="card">
              <h2>What is ASP?</h2>
              <h5>ASP/Active Server Pages are HTML pages with embedded ASP scripts. 
                ASP scripts are processed on the server before the page is sent to the visitor's browser. 
                ASP allows you to create dynamic database driven pages, a visitor can access data in a database 
                and interact with page objects such as Active X or Java components.</h5>
              </div>
              <div className="card">
                <h2>Domain Name Server (DNS)</h2>
                <h5>Each computer on the Internet is assigned a unique address, called an IP address. 
                  A typical IP address looks like this: 199.123.456.7</h5>
              </div>
            </div>
        </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="cards">            
          <div className="card">
              <h2>Dedicated hosting service</h2>
              <h5>A dedicated hosting service, dedicated server, or managed hosting service is a type of 
                Internet hosting in which the client leases an entire server not shared with anyone else. This is more flexible than shared hosting, as organizations 
                have full control over the server(s), including choice of operating system, hardware,</h5>
            </div>
            <div className="card">
              <h2>Shared Hosting</h2>
              <h5>In a shared hosting environment, several websites are put on to a single server.
                 This way, the web host can reduce its cost, and services will be cheaper. Limitations 
                 include limits on storage and bandwidth, and the performance of your website is largely affected by the needs of the other websites, as you will be sharing the same server resources. This hosting service 
                is ideal for websites that do not require a lot of bandwidth, disk storage or CPU consumption.</h5>
            </div>
            <div className="card">
              <h2>Dedicated Hosting</h2>
              <h5>In a dedicated hosting environment, your website is the only one hosted on the server. 
                Because you are not sharing server resources with other websites, your limit is that of the server. This hosting service is for people who plan to run a very popular website, 
                requires a lot of disk space or run scripts that requires more than average CPU consumption.</h5>
            </div>

             
        </div>
       </div>
        </div>


  );
}

export default Tabs;