import { useState } from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

const AuthForm = ({ type = 'login' }) => {
    let authFormName = (type == 'login') ? 'Sign In' : 'Sign Up';
    return (
        <>
            <div className="container mx-auto px-4 mt-4 flex justify-center">
                <Card className='mt-28' color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        {authFormName}
                    </Typography>
                    <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <>
                                {(type !== 'login') && (
                                    <>
                                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                                            Your Name
                                        </Typography>
                                        <Input
                                            size="lg"
                                            placeholder="Your Name"
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                    </>
                                )}

                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Your Email
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="name@mail.com"
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />

                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Password
                                </Typography>
                                <Input
                                    type="password"
                                    size="lg"
                                    placeholder="********"
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />

                                <Button className="mt-6" fullWidth>
                                    {authFormName}
                                </Button>
                            </>


                        </div>
                        {
                            (type == 'login') ?

                                <Typography color="gray" className="mt-4 text-center font-normal">
                                    Already have an account?{" "}
                                    <a href="#" className="font-medium text-gray-900">
                                        Sign In
                                    </a>
                                </Typography>
                                : ''
                        }

                    </form>
                </Card>
            </div>
        </>
    )
}

export default AuthForm