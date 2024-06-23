"use client"

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";



import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })
const CardContainer = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })
 function onSubmit(values:any) {
    
    console.log(values)
  }
    
    return (
        <div>
<div className="PlayQuiz"><a>Playnig Quiz</a></div> 
            <div className="SerachBox">
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Input placeholder="535 TV Series" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
    
      </form>
    </Form>
            </div>
            <div className="CardContainer">
                <div className="Card-Track">
                    <a href="/form">
                        <Card className="SingleCard">
                            <CardHeader>

                                <CardContent><img src="img.png" alt="a Movie Image" className="CardImg" /></CardContent>
                            </CardHeader>
                            <CardContent>
                                <h1 className="CardH1" >Brooklyn Nine-Nine</h1>
                                <p>
                                    A legal drama about a brilliant college dropout, Mike Ross, who lands a job at a prestigious law firm, working with sharp lawyer Harvey Specter.
                                </p>
                            </CardContent>


                            <CardContent className="ShadeColor B" id="B"></CardContent>
                            <div className="CardFooter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <g clip-path="url(#clip0_648_1246)">
                                        <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_648_1246">
                                            <rect width="28" height="28" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <a href="/form"><svg className="CardButton" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                                </a>         </div>

                        </Card>
                    </a>
                    <a href="/form">  <Card className="SingleCard">
                        <CardHeader>
                            <CardContent><img src="brooklyn.png" alt="a Movie Image" className="CardImg" /></CardContent>
                        </CardHeader>
                        <CardFooter></CardFooter>

                        <CardContent>
                            <h1 className="CardH1" >Brooklyn Nine-Nine</h1>
                            <p>
                                A Brooklyn Nine-Nine" is a comedy series about a quirky NYPD precinct led by Detective Jake Peralta and stern Captain Holt </p>
                        </CardContent>


                        <CardContent className="ShadeColor Y"></CardContent>
                        <div className="CardFooter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <g clip-path="url(#clip0_648_1246)">
                                    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_648_1246">
                                        <rect width="28" height="28" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <a href="/form"><svg className="CardButton" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            </a>         </div>
                    </Card>
                    </a>

                    <a href="/form">       <Card className="SingleCard">
                        <CardHeader>
                            <CardContent><img src="jurassic.png" alt="a Movie Image" className="CardImg" /></CardContent>
                        </CardHeader>
                        <CardFooter></CardFooter>

                        <CardContent>
                            <h1 className="CardH1" >Jurassic Park</h1>
                            <p>
                                A thrilling adventure where dinosaurs are brought back to life in a theme park, leading to chaos and survival challenges.
                            </p>
                        </CardContent>


                        <CardContent className="ShadeColor G"></CardContent>
                        <div className="CardFooter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <g clip-path="url(#clip0_648_1246)">
                                    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_648_1246">
                                        <rect width="28" height="28" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <a href="/form"><svg className="CardButton" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            </a>         </div>
                    </Card>
                    </a>
                    <a href="/form">        <Card className="SingleCard">
                        <CardHeader>
                            <CardContent><img src="handmaid's.png" alt="a Movie Image" className="CardImg" /></CardContent>
                        </CardHeader>
                        <CardFooter></CardFooter>
                        <CardContent>
                            <h1 className="CardH1" >The Handmaid's Tale</h1>
                            <p>
                                In a dystopian society, women are forced into servitude, highlighting themes of oppression, resistance, and the struggle for freedom.
                            </p>
                        </CardContent>


                        <CardContent className="ShadeColor R"></CardContent>
                        <div className="CardFooter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <g clip-path="url(#clip0_648_1246)">
                                    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_648_1246">
                                        <rect width="28" height="28" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <a href="/form"><svg className="CardButton" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            </a>         </div>
                    </Card>
                    </a>
                    <a href="/form">
                        <Card className="SingleCard">
                            <CardHeader>

                                <CardContent><img src="img.png" alt="a Movie Image" className="CardImg" /></CardContent>
                            </CardHeader>
                            <CardContent>
                                <h1 className="CardH1" >Brooklyn Nine-Nine</h1>
                                <p>
                                    A legal drama about a brilliant college dropout, Mike Ross, who lands a job at a prestigious law firm, working with sharp lawyer Harvey Specter.
                                </p>
                            </CardContent>


                            <CardContent className="ShadeColor B"></CardContent>
                            <div className="CardFooter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <g clip-path="url(#clip0_648_1246)">
                                        <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_648_1246">
                                            <rect width="28" height="28" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <a href="/form"><svg className="CardButton" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                                </a>         </div>

                        </Card>
                    </a>
                    <a href="/form">  <Card className="SingleCard">
                        <CardHeader>
                            <CardContent><img src="brooklyn.png" alt="a Movie Image" className="CardImg" /></CardContent>
                        </CardHeader>
                        <CardFooter></CardFooter>

                        <CardContent>
                            <h1 className="CardH1" >Brooklyn Nine-Nine</h1>
                            <p>
                                A Brooklyn Nine-Nine" is a comedy series about a quirky NYPD precinct led by Detective Jake Peralta and stern Captain Holt </p>
                        </CardContent>


                        <CardContent className="ShadeColor Y"></CardContent>
                        <div className="CardFooter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <g clip-path="url(#clip0_648_1246)">
                                    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_648_1246">
                                        <rect width="28" height="28" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <a href="/form"><svg className="CardButton" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            </a>         </div>
                    </Card>
                    </a>

                    <a href="/form">       <Card className="SingleCard">
                        <CardHeader>
                            <CardContent><img src="jurassic.png" alt="a Movie Image" className="CardImg" /></CardContent>
                        </CardHeader>
                        <CardFooter></CardFooter>

                        <CardContent>
                            <h1 className="CardH1" >Jurassic Park</h1>
                            <p>
                                A thrilling adventure where dinosaurs are brought back to life in a theme park, leading to chaos and survival challenges.
                            </p>
                        </CardContent>


                        <CardContent className="ShadeColor G"></CardContent>
                        <div className="CardFooter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <g clip-path="url(#clip0_648_1246)">
                                    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_648_1246">
                                        <rect width="28" height="28" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <a href="/form"><svg className="CardButton" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            </a>         </div>
                    </Card>
                    </a>
                    <a href="/form">        <Card className="SingleCard">
                        <CardHeader>
                            <CardContent><img src="handmaid's.png" alt="a Movie Image" className="CardImg" /></CardContent>
                        </CardHeader>
                        <CardFooter></CardFooter>
                        <CardContent>
                            <h1 className="CardH1" >The Handmaid's Tale</h1>
                            <p>
                                In a dystopian society, women are forced into servitude, highlighting themes of oppression, resistance, and the struggle for freedom.
                            </p>
                        </CardContent>


                        <CardContent className="ShadeColor R"></CardContent>
                        <div className="CardFooter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <g clip-path="url(#clip0_648_1246)">
                                    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_648_1246">
                                        <rect width="28" height="28" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <a href="/form"><svg className="CardButton" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            </a>         </div>
                    </Card>
                    </a>
                </div>
            </div>



        </div>
    )
}
export default CardContainer