import React from 'react'
import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin} from "react-icons/bs"

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-gray-500">
        <div className='w-full max-w-7xl mx-auto' >
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mb-7 mt-3'>
                <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white '>
                        <span className='px-2 py-1 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-800 text-white rounded-lg ' >Let's</span>
                                Blog
                </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6' >
                        <div>
                            <FooterTitle  title='About'/>
                            <FooterLinkGroup col>
                                <FooterLink href='/about' target='_blank'>
                                        Let's Blog
                                </FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                        <FooterTitle  title='Follow us'/>
                            <FooterLinkGroup col>
                                <FooterLink href='https://github.com/Kishoreram2004' target='_blank'>
                                        Github
                                </FooterLink>
                                <FooterLink href='https://www.linkedin.com/in/kishore-p-44818a286/' target='_blank'>
                                        LinkedIn
                                </FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                        <FooterTitle  title='Legal'/>
                            <FooterLinkGroup col>
                                <FooterLink href='#'>
                                        Privacy Policy
                                </FooterLink>
                                <FooterLink href='#'>
                                        Terms &amp; Conditions 
                                </FooterLink>
                            </FooterLinkGroup>
                        </div>                        
                </div>
            </div>
            <FooterDivider />
            <div className='sm:flex w-full sm:items-center sm: justify-between '>
                <FooterCopyright href='#' by="let's blog" year={new Date().getFullYear()}/>
                <div className='mt-3 flex gap-6  sm:justify-center'>
                    <FooterIcon href="#" icon={BsFacebook}/>
                    <FooterIcon href="#" icon={BsInstagram}/>
                    <FooterIcon href="#" icon={BsTwitter}/>
                    <FooterIcon href="#" icon={BsGithub}/>
                    <FooterIcon href="#" icon={BsLinkedin}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}

export default FooterCom