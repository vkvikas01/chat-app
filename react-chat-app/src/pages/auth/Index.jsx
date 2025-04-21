import React, { useState } from 'react'
import Background from "../../assets/login2.png"
import Victory from "../../assets/victory.svg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"



function Index() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")

    const handleLogin=async()=>{
        
    }
    const handleSignUp=async()=>{

    }
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center '>
      <div className="h-[80vh] bg-white border-2 border-white shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex flex-col gap-10 items-center justify-center">
            <div className='flex  justify-center items-center flex-col'>
                <div className="flex justify-center items-center">
                    <h1 className='text-5xl font-bold md:text-6xl'>Welcome</h1>
                    <img src={Victory} alt='Victory' className='h-[100px]'/>
                </div>
                <p className='font-medium text-center'>Fill in the details to get started with the best chat app</p>
            </div>
            <div className="flex items-center justify-center w-full">
                <Tabs className="w-3/4">
                    <TabsList className="bg-transparent rounded-none w-full">
                        <TabsTrigger value="login" className="data-[state=active]:bg-transparent text-black border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Login</TabsTrigger>
                        <TabsTrigger value="signup" className="data-[state=active]:bg-transparent text-black border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Singup</TabsTrigger>
                    </TabsList>
                    <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                        <Input placeholder="Email" type="email" className="rounded-full p-6" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <Input placeholder="Password" type="password" className="rounded-full p-6" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <Button className="rounded-full p-6 cursor-pointer bg-black text-white" onClick={handleLogin}>Login</Button>
                    </TabsContent>
                    <TabsContent className="flex flex-col gap-5 " value="signup">
                    <Input placeholder="Email" type="email" className="rounded-full p-6" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <Input placeholder="Password" type="password" className="rounded-full p-6" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <Input placeholder="Confirm Password" type="password" className="rounded-full p-6" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    <Button className="rounded-full p-6 cursor-pointer bg-black text-white" onClick={handleSignUp}>Sign Up</Button>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
        <div className='hidden  xl:flex justify-center items-center'>
<img src={Background} alt="background login" className='h-[650px]'/>
        </div>
      </div>
    </div>
  )
}

export default Index
