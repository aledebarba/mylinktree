import Head from 'next/head'
import { useEffect, useState } from 'react'
export default function Home() {
  function handleClick(e) {
    e.preventDefault()
    const code = e.target.attributes.href.value;
    window.location.href = atob(code);
  }

  return (
   <>
      <Head>
        <title>Linktree : Alexandre Macedo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="content">
        <div className="header">
              <div className="avatar"></div>
              <h1>Alexandre Macedo</h1>
              <h2>dev front-end | visual designer</h2>
          </div>
          <ul className="links">
              <li>
                  <a href="bWFpbHRvOmFsZUBhbGVtYWNlZG8uY29t" onClick={handleClick}>
                      <img src="./images/icons/email.svg" alt="email icon"/>
                      <p>e-mail</p>
                  </a>
              </li>
              <li>
                  <a href="https://github.com/aledebarba/" target="_blank">
                      <img src="./images/icons/github.svg" alt="github icon"/>
                      <p>Github</p>
                  </a>
              </li>
              <li>
                  <a href="https://codepen.io/aledebarba" target="_blank">
                      <img src="./images/icons/codepen.svg" alt="Codepen icon"/>
                      <p>Codepen</p>
                  </a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/aledebarba/" target="_blank">
                      <img src="./images/icons/linkedin.svg" alt="linkedin icon"/>
                      <p>LinkedIn</p>
                  </a>
              </li>
              <li>
                  <a href="https://www.behance.net/aledebarba/projects" target="_blank">
                      <img src="./images/icons/behance.svg" alt="Behance icon"/>
                      <p>Behance</p>
                  </a>
              </li>
              <li>
                  <a href="https://twitter.com/alemacedo" target="_blank">
                      <img src="./images/icons/twitter.svg" alt="twitter icon"/>
                      <p>Twitter</p>
                  </a>
              </li>
              <li>
                  <a href="https://www.instagram.com/aledebarba/" target="_blank">
                      <img src="./images/icons/instagram.svg" alt="instagram icon"/>
                      <p>Instagram</p>
                  </a>
              </li>
              <li>
                  <a href="https://www.flickr.com/photos/alemacedo" target="_blank">
                      <img src="./images/icons/flickr.svg" alt="flickr icon"/>
                      <p>Flickr</p>
                  </a>
              </li>
          </ul>
      </div>
      <div className="footer-reveal"></div>
      <div className="footer">
          <p>Fell free to contact me at any oportunity. I'll be happy to answer you asap.</p>
      </div>
  </>
  )
}
