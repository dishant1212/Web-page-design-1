import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";


function App() {
  return (
    <>
    {/* Navbar start ... */}
    <nav className='h-14 w-full text-black bg-white flex justify-between items-center py-8 px-4 '>
      <div className='w-40 flex items-center'>
        <div>
        <img className='h-10 w-10' src='https://logowik.com/content/uploads/images/calendly3400.logowik.com.webp'/> 
        </div>
        <div className='text-2xl font-bold text-blue-600'>Calendly</div>
        
      </div>
      <ul className='hidden space-x-[7px]  lg:space-x-10 font-medium md:flex'>
        <li>Individuals</li>
        <li>Teams</li>
        <li>Enterprise</li>
        <li>Product</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <div className='flex space-x-6 items-center'>
      <div className='hidden md:flex font-medium'>
        Log In
      </div>
      <button className='bg-blue-600 text-white rounded-3xl p-[7px] hover:bg-blue-500'>Get started</button>
      </div>
    </nav>

    {/*navbar end ... */}

    {/*hero section start */}
    <div className='w-full h-auto bg-blue-950 flex  md:flex-row flex-col items-center justify-evenly '>
        <div className="w-full md:w-[40%] h-full my-4 py-4 px-10">
          <p className='text-4xl sm:text-6xl  lg:text-7xl text-white'>
              Secure connectins, empowered teams
          </p>
          <p className='text-white py-8'>
            Bring your teams together in a certrally- managed ecosystem with complete oversight and visibility
          </p>

          <button className='text-white p-2 px-2 hover:bg-blue-500 bg-blue-600 inline rounded-3xl'>Contact sales</button>
        </div>

        <div className="w-full md:w-[40%] h-full  my-4 py-4 flex flex-col space-y-6 "> 
               <div className='h-28 w-full  flex justify-center items-center'>
                 
                 <img className='h-28 w-24 md:w-32  bg-white rounded-md' src='https://logowik.com/content/uploads/images/calendly3400.logowik.com.webp'/>

               </div>

               <div className='h-40 w-full   flex space-x-[5px]   md:space-x-4 px-4 md:px-0'>

                <div className='h-24 w-60 md:w-30 bg-white rounded-xl flex flex-col justify-center items-center'>
                  <p className=' bg-indigo-200 px-2 font-bold text-gray-800'>Customer </p>
                  <div className='flex m-4'>
                    <img className='h-10 w-10 rounded-3xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtcO4YmGkZhf8rEs8DdPZYnLlPCpOF1pTMZMYf1lDHzaQFAqjUKPzRFdZaqDRuBuYKHo&usqp=CAU'/>
                    <img className='h-10 w-10 rounded-3xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jwEHzg5dm29oUwpVWflTmQHqBLJUuCYd_ise9N4Ckg&s'/>
                    {/* <img className='h-10 w-10 rounded-3xl' src='https://www.kindpng.com/picc/m/155-1550391_faces-in-circle-png-transparent-png.png'/>
                    */}
                  </div>
                </div>

                <div className='h-40 w-80 md:w-80   bg-white rounded-xl flex flex-col justify-between items-center'>
                  <p className='bg-gray-300 px-8 font-bold text-gray-800'>Sales</p>
                  <div className='w-full  flex flex-col justify-between  items-center'>
                    <div className='w-full h-auto flex justify-center items-center '>
                  <img className='h-[44px] w-[44px] rounded-3xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTAHOdavIH8vvRk0U2ZtYIzUX0pBSd3FHjCzMx5Ac5nzqllbkH9gYQYwidJn5ECOpbAPQ&usqp=CAU'/>
                    <img className='h-[44px] w-[44px]  rounded-3xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvncVK-SvQKQgZqq0ozFb2wKt0QfLUxlSC9TaZ_CjYlg&s'/>
                    <img className='h-[44px] w-[44px]  rounded-3xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTeeaCTTyrL9HZdW2bmrlr-edN1fFhNxjLyfmyMUdoP34H8HPocRASP6rWVVo_wdwnebU&usqp=CAU'/>
                    </div>
                    <div  className='w-full h-auto flex justify-center items-center'>
                    <img className='h-[50px] w-[50px]  rounded-3xl' src='https://www.pngitem.com/pimgs/m/128-1284293_marina-circle-girl-picture-in-circle-png-transparent.png'/>
                    <img className='h-[50px] w-[50px] rounded-3xl' src='https://p.kindpng.com/picc/s/404-4042717_face-profile-png-circle-profile-picture-hd-png.png'/>
                    </div>
                  
                  </div>
                  <div className=' font-bold text-gray-600'>
                    Two users added
                  </div>
                </div>

                <div className='h-24 w-60 md:w-30 py-10 bg-white rounded-xl flex flex-col justify-center items-center'>
                  <p className='bg-indigo-200 px-2 font-bold text-gray-800'>Recruiting</p>
                  <div className='flex m-4'>
                    <img className='h-10 w-10 rounded-3xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrhUb7VQWOQJGKQSBG-HdqODWBe8WhgZsHi558ATMjy-a2MYFDSwwNCBVrkHInuL6M5U&usqp=CAU'/>
                    <img className='h-10 w-10 rounded-3xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_mpdTkAOjNZ8_N9SNFkzq7XCHXP81acoXPoHCRNi1o7IQk3EMPXwcA7kEVjw9jMHXos&usqp=CAU'/>
                    
                    {/* <img className='h-10 w-10 rounded-3xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxGiTeafkHXJ_-irTTiyv5S6SxrJa_QmcfoGI7mR1lbCXJXB433xMdQLXqsLGnT5SF5k&usqp=CAU'/> */}
                    
                  </div>
                </div>

               </div>
        </div>
    </div>

    {/*hero section end */}
     
    <div className='h-auto w-full py-20 flex flex-col justify-center items-center'>
      <p className='text-5xl py-4 w-[90%] md:w-[60%] text-blue-900 font-bold text-center'>Work faster, smarter, and more securely</p>
      <p className='text-2xl py-4 w-[90%] md:w-[60%] text-blue-400 text-center'>Sales, Customer Success, Support, Recruiting, and Marketing teams rely on scheduling platforms tosave time and quickly connect with customers. </p>
      
    </div>

    <div className='w-full h-auto  md:py-8  flex  justify-center items-center'>
      <div className='w-full flex flex-col md:flex-row items-center sm:justify-center lg:justify-center  '>
         <div className='h-60 w-96 p-10  bg-gray-100  border-b-2 md:border-b-0  border-gray-300 flex flex-col justify-center items-start' >
           <p className='text-4xl font-bold text-blue-900'>75%</p>
           <p className='text-xl py-4 w-[60%] text-blue-400'>reduction in time to schedule customer success calls</p>
         </div>
         <div className='h-60 w-96 p-10 bg-gray-100 border-b-2 border-gray-300 md:border-b-0  md:border-l-2  md:border-gray-300 flex flex-col justify-center items-start'>
          <p className='text-4xl font-bold text-blue-900' >200%</p> 
          <p className='text-xl py-4 w-[60%] text-blue-400'>increase in connections between sales and customer leads</p>
         </div>
         <div className='h-60 w-96 p-10 bg-gray-100  md:border-l-2  md:border-gray-300 flex flex-col justify-center items-start'>
          <p className='text-4xl font-bold text-blue-900'>200%</p>
          <p className='text-xl py-4 w-[60%] text-blue-400'>more customers onboarded per month</p>
         </div>
         </div>
    </div>

    <div className='w-full h-auto  px-0 md:px-10 flex flex-col  items-center md:flex-row '>
     
           <div className='w-[80%] md:w-[50%] flex flex-col justify-center items-start'>
            
            <h1 className='font-bold text-xl   2xl:text-3xl text-blue-900 my-4'>Retain control as your team scales</h1>
             <p className='text-xl text-blue-400   2xl:text-3xl'>Working within one organizational account ensures you securely account for all active users as you scale. With Calendly, IT teams can maintain more oversight over account access and Individual permissions, as well as audit activity at any time.</p>
            </div>
           

           <div className="w-[80%] md:w-[50%] px-10 ">
            <img className='w-full h-full'  src='https://www.salesforceben.com/wp-content/uploads/2022/01/Screenshot-2022-01-23-at-19.27.52.png' />
           </div>
 
    </div>

    <div className='w-full h-auto  px-0 md:px-10 flex flex-col items-center md:flex-row bg-gray-100'>
     
           <div className='w-[80%] md:w-[50%] px-10  '>
            <img className='w-full h-full'  src='https://images.ctfassets.net/k0lk9kiuza3o/4dWGJL4E6om7dG8e1Oxbli/f7bcf38a2da5d6f8ab9d617d164f3703/Calendly-Enterprise-Small__3_.png?q=85&fm=webp' />

            </div>
           

           <div className="w-[80%] md:w-[50%] flex flex-col  justify-center items-start">
            
           <h1 className='font-bold text-xl   2xl:text-3xl text-blue-900 my-4'>Designed for your whole organization</h1>
             <p className='text-xl text-blue-400  2xl:text-3xl'>With Calendly commonly used to power meetings with prospects, customers, recruits and more, it’s ideal to power scheduling for your whole company with meeting analytics, and enterprise-ready admin, security, and IT-oriented features.</p>
           </div>
 
    </div>

    <div className='w-full h-auto  px-0 md:px-10 flex flex-col items-center md:flex-row '>
     
           <div className='w-[80%] md:w-[50%] flex flex-col justify-center items-start'>
            
            <h1 className='font-bold text-xl   2xl:text-3xl text-blue-900 my-4'>Get more value from your existing technology</h1>
             <p className='text-xl text-blue-400   2xl:text-3xl'>Calendly securely integrates with the tools your teams rely on every day. This includes seamless OAuth through Google Calendar and Office 365 as well as integrations across leading video conferencing tools (Zoom, Google Meet , Microsoft Teams , Webex), and more</p>
            </div>
           

           <div className="w-[80%] md:w-[50%] px-10 ">
            <img className='w-full h-full'  src='https://www.kpintegrators.com/wp-content/uploads/CalendlyIntegrations.webp' />
           </div>
 
    </div>

    <div className='h-auto w-full flex justify-center items-center'>
        <div className='h-full w-[80%] flex flex-col justify-center items-center pt-10 pb-10'>
               <p className='text-blue-600 text-xl py-4'>CALENDLY FEATURES</p>
               <p className='text-blue-900 text-2xl md:text-4xl font-bold pb-4'>Favorite Security Features</p>
               <p className='text-gray-500 text-xl md:text-2xl text-center'>Here's a closer look at some of the security features IT admins enjoy wit hCalendly.</p >
               <div className='py-8 space-x-4'>
                <button className='p-2 px-4 text-white bg-blue-600 rounded-3xl hover:bg-blue-500'>Start for free </button>
               <button className='p-2 px-4 hover:bg-gray-300 font-medium text-black border-[2px] border-black rounded-3xl '>Learn more</button>
               </div> 
        </div>

    </div>

    <div className='w-full h-auto  px-0 md:px-10 md:py-10 flex flex-col md:flex-row '>
     
           <div className='w-[100%] md:w-[50%] flex flex-col justify-center items-start'>
            <img className='w-full h-full'  src='https://images.ctfassets.net/k0lk9kiuza3o/3emCMfa6ura2IBosU7hhXw/87066cafa9e74ae5517543ad61e29aef/Calendly-IT-workflows_io.png' />
           
            </div>
           
           <div className="w-100% md:w-[50%] px-10  flex  flex-col justify-center items-start">

           <h1 className=' text-blue-600 my-2'>USER PII DATA DELETION</h1>
           <p className='font-bold text-xl   2xl:text-3xl text-blue-900 my-2'>Maintain GDPR compliance</p>
             <p className='text-xl text-gray-600  '>Stay compliant with privacy rules and requlations at scale with self-service data deletion, which allows admins to immeditely erase user data as needed.</p>
             
           </div>
 
    </div>

    <div className='w-full h-auto  px-0 md:px-10 md:py-10 flex flex-col md:flex-row '>
     
           <div className='w-100% md:w-[50%] px-10  flex  flex-col justify-center items-start'>
            <h1 className=' text-blue-600 my-2'>USER GROUPS</h1>
           <p className='font-bold text-xl   2xl:text-3xl text-blue-900 my-2'>Save time with group admins</p>
             <p className='text-xl text-gray-600 '>Delegate specific team members with group admin privileges to manage users, processes, and other account settings.</p>
            </div>
           
           <div className="w-100% md:w-[50%] px-10  flex  flex-col justify-center items-start">

           <img className='w-full h-full'  src='https://images.ctfassets.net/k0lk9kiuza3o/6Oll5oqDaDgZYVpzUkfLnJ/838a49578b02425e8b6885a8096dfbcc/Calendly-Group-Admin.png?q=85&fm=webp' />
           
             
           </div>
 
    </div>

    <div className='w-full h-auto  px-0 md:px-10 md:py-10  flex flex-col md:flex-row '>
     
     <div className='w-[100%] md:w-[50%] flex flex-col justify-center items-start'>
       <img className='w-full h-full'  src='https://images.ctfassets.net/k0lk9kiuza3o/6IsaHEWbXDqH0TcGVBTCE9/a0852e10e6cf3ac68c78e9c93bdc822f/it-alation-desktop.png?q=85&fm=webp' />
     
      </div>
     
     <div className="w-100% md:w-[50%] px-10  flex  flex-col justify-center items-start">

     <h1 className=' text-blue-600 my-2'>SINGLE SIGN_ON (SSO)</h1>
     <p className='font-bold text-xl   2xl:text-3xl text-blue-900 my-2'>Reduce risk with secure authentication</p>
       <p className='text-xl text-gray-600 '>Deploy Calendly confidently with support for SAML-based SSO with leading indentity providers Okta, Ping indentity, Azure, OneLogin, and AuthO.</p>
       
     </div>

</div>

<div className='w-full h-auto  px-0 md:px-10 md:py-10 flex flex-col md:flex-row '>
     
     <div className='w-100% md:w-[50%] px-10  flex  flex-col justify-center items-start'>
       <h1 className=' text-blue-600 my-2'>SCIM PROVISIONING</h1>
     <p className='font-bold text-xl   2xl:text-3xl text-blue-900 my-2'>Manage user access at scale</p>
       <p className='text-xl text-gray-600 '>Efficiently onboard and off-board employees with automatic provisioning and de-provisioning via SCIM with Okta, OneLogin, and Microsoft Azure.</p>
      </div>
     
     <div className="w-100% md:w-[50%] px-10  flex  flex-col justify-center items-start">
      
     <img className='w-full h-full'  src='https://images.ctfassets.net/k0lk9kiuza3o/6Ypo7LYnCeoVOsxpujiPZS/9992ace15355f53c2247260468894575/Calendly-Automate-Access.png' />
     
       
     </div>

</div>

<div className='h-auto w-full flex justify-center items-center'>
     
    <div className='h-full w-[80%] flex flex-col justify-center items-center pt-10 pb-10'>
      <p className='text-blue-600 text-xl py-4'>SUCCESS STORIES</p>
      <p  className='text-blue-900 text-2xl md:text-4xl font-bold pb-4'>Do more of what you do best</p>
      <p className='text-gray-500 text-xl md:text-2xl text-center'>Eliminate scheduling hassles and interruptions so your organization accomplishes more.</p>
      
    </div>

</div>


<div className='h-auto w-full flex  flex-col md:flex-row space-y-2 md:space-x-2 items-center p-4'>
  <div className='h-82 w-full md:1/3 border-[1px] border-gray-300  rounded-xl flex flex-col justify-center items-center'>
    <div className='h-81 w-full ' >
      <img className='rounded' src='https://images.ctfassets.net/k0lk9kiuza3o/24AIGqkacDesR5G2Azm4yg/0918dd799669fd4488eb3fcb42063d08/smith-ai-card-image.png?q=85&fm=webp'/>
    </div>
    <div className=' w-[90%]'>
    <p className='my-2 text-blue-600'>CUSTOMER STORY</p>
    <p className='text-xl font-semibold text-gray-800'>Stack Overflow's streamlined admin forges relationships with new recruits ...</p>
    <button className='my-4 text-blue-600 font-medium'>Read now </button>
    </div>
  </div>

  <div className='h-82 w-full md:1/3 border-[1px] border-gray-300  rounded-xl flex flex-col justify-center items-center'>
    <div className='h-81 w-full'>
      <img className='rounded' src='https://images.ctfassets.net/k0lk9kiuza3o/3H4ehRrQVJHg9PvANNxi28/0626149019f3782a20af6c76fa63e8dd/atlassian-card-image.png?q=85&fm=webp'/>
    </div>
    <div className=' w-[90%]'>
    <p className='my-2 text-blue-600'>CUSTOMER STORY</p>
    <p className='text-xl font-semibold text-gray-800'>University of Texas at Austin saves money through administrative ...</p>
    <button className='my-4 text-blue-600 font-medium'>Read now </button>
    </div>

  </div>

  <div className='h-82 w-full md:1/3 border-[1px] border-gray-300  rounded-xl flex flex-col justify-center items-center '>
    <div className='h-81 w-full'>
      <img className='rounded' src='https://images.ctfassets.net/k0lk9kiuza3o/1JtkVCw38p37peD7T53ORU/72f5e2b9625694f20864ff2dcdd0cdaf/mike-morse-law-firm-card-image.png?q=85&fm=webp'/>
    </div>
    <div className=' w-[90%]'>
    <p className='my-2 text-blue-600'>CUSTOMER STORY</p>
    <p className='text-xl font-semibold text-gray-800'>More meetings, better prospects boost Bitly's conversions aross the board ...</p>
    <button className='my-4 text-blue-600 font-medium'>Read now </button>
    </div>
  </div>

</div>

<div className='h-auto py-6 w-full bg-blue-900 flex justify-center items-center'>
    <div className='my-10 w-full  flex flex-col justify-center items-center'>
      <p className='my-2 text-2xl sm:text-4xl md:text-6xl text-white w-[70%] text-center'>Secure connections, empowered teams</p>
      <p className='my-4 text-2xl sm:text-4xl md:text-2xl text-white w-[70%] text-center'>Calendly enbles teams across the organization to do their jobs more efficiently, crate better customer connections, and get more value from the tools they already rely on.</p>

      <button className='mt-10 p-2 px-4 rounded-3xl text-white border-2 border-white hover:bg-blue-600'>Talk with Sales</button>
    </div>
</div>

{/* footer section */}
  <footer>
      <div className='h-auto w-full flex  justify-center items-center py-28' >
        <div className='w-[90%] flex space-x-2 flex-col md:flex-row'>
           <div className='space-y-20 w-[90%] md:w-1/3 '>
               <div className='text-4xl font-bold mt-14'> 
                <p className='text-blue-950 '>Easy</p>
                <p className='text-blue-700'>ahead</p>
               </div>
               <div className='text-2xl text-gray-700'>We take the work out of connecting with others so you can accomplish more.</div>
               <select className='h-8 w-full border-[1px] border-gray-600'>
        <option >English</option>
        <option >Hindi</option>
        <option >Francais</option>
        <option >Espanol</option>
        <option >Deutsch</option>
        <option >Portugues</option>     
               </select>

        <div className="flex text-4xl space-x-4 md:space-x-8 ">
             
        <div><TiSocialTwitter /></div>
        <div><TiSocialFacebook /></div>
        <div><SlSocialInstagram /></div>
        <div><TiSocialLinkedin /></div>
        <div><SlSocialYoutube /></div>
               </div>
               <div className="text-gray-500">
            <p className="hidden md:flex">Copyright Calendly 2024</p>
           </div>
           </div>

           


           <div className='w-[90%] md:w-2/3 flex flex-col  md:space-y-20 '>
            <div className="w-full mx:0 my-14 md:mx-14 flex justify-evenly">
                    <div className="space-y-3  text-gray-700 ">
                      <h1 className="text-xl md:text-2xl text-blue-950 font-bold">About</h1>
                      <p>About Calendly</p>
                      <p>Contact Sales</p>
                      <p>Newsroom</p>
                      <p>Careers</p>
                      <p>Security</p>
   
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <h1 className="text-xl md:text-2xl text-blue-950 font-bold">Solutions</h1>
                      <p>Customer Success</p>
                      <p>Sales</p>
                      <p>Recruiting</p>
                      <p>Information Technology</p>
                      <p>Marketing</p>
   
                    </div>
                    <div className="space-y-3  text-gray-700">
                      <h1 className="text-xl md:text-2xl text-blue-950 font-bold">Popular Features</h1>
                      <p>Embed Calendly</p>
                      <p>Availability</p>
                      <p>Sending Notifications</p>
                      <p>Using Calendly Mobile</p>
                      <p></p>
   
                    </div>
                </div>

                <div className="w-full mx:0 my-4 md:mx-14 flex justify-evenly">
                <div className="space-y-3  text-gray-700">
                      <h1 className="text-xl md:text-2xl text-blue-950 font-bold">Support</h1>
                      <p>Help Center</p>
                      <p>Video Tutorials</p>
                      <p>Cookie settings</p>
                     
   
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <h1 className="text-xl md:text-2xl text-blue-950 font-bold">Add-Ons</h1>
                      <p>Download for Chrome</p>
                      <p>Download for Firefox</p>
                      
   
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <h1 className="text-xl md:text-2xl text-blue-950 font-bold">Developers</h1>
                      <p>Developer Tools</p>
                    
                    </div>

                </div>
                
                <div className="text-[12px] md:text-md  text-gray-500 w-full mx:0 my-4 md:mx-14 flex justify-between md:justify-end   md:items-end ">
                  <p >Privacy / Terms and Conditions</p>
                  <p className="flex md:hidden">Copyright Calendly 2024</p>
                </div>
           </div>
       </div>

      
      </div>


  </footer>

    </>
  );
}

export default App;
