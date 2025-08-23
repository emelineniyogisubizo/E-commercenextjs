"use client";

import { FaGooglePlay, FaApple, FaTelegramPlane, FaFacebookF,FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-black text-white px-10 py-5">
            <div className="ml-15 grid grid-cols-1 md:grid-cols-5 gap-10 mr-15 mt-10 ">

                <div className="mb-6 min-w-[180px]">
                    <div className="text-2xl font-bold mb-4">Exclusive</div>
                    <p className="mb-2 font-semibold">Subscribe</p>
                    <p className="mb-4">Get 10% off your first order</p>
                    <form className="flex relative">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded border border-gray-700 
                        bg-transparent placeholder-gray-400
                        focus:ouline-none"
                        />
                        <button
                            type="submit"
                            className="absolute pl-48  mt-3 font-bold">
                            <FaTelegramPlane />
                        </button>
                    </form>
                </div>

                <div className="mb-6 min-[150px]">
                    <div className="text-2xl font-semibold mb-3">Support</div>
                    <ul className="text-gray-300 space-y-1">
                        <li>111 Bijoy serani, Dhaka, </li>
                        <li>DH 1515, Bangladesh.</li>
                        <li>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                </div>

                <div className="mb-6 min-w-[120px]">
                    <div className="text-2xl font-semibold mb-3">Account</div>
                    <ul className="space-y-1">
                        <li><Link href="/" className="hover:underline">My Account</Link></li>
                        <li><Link href="/Login" className="hover:underline">Login / Register</Link></li>
                        <li><Link href="/cart" className="hover:underline">Cart</Link></li>
                        <li><Link href="/wishlist" className="hover:underline">WishList</Link></li>
                        <li><Link href="/shop" className="hover:underline">Shop</Link></li>
                    </ul>
                </div>

                <div className="mb-6 min-w-[120px]">
                    <div className="text-2xl font-semibold mb-3">Quink Link</div>
                    <ul className="space-y-1">
                        <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                        <li><Link href="/terms-of-us" className="hover:underline">Terms Of Use</Link></li>
                        <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                </div>

                <div className="mb-6 min-w-[120px]">
                    <div className="text-2xl font-semibold mb-3">Download App</div>
                    <p className="mb-3 text-gray-400 text-l font-semibold"> Save $3 with App New User Only</p>
                    <div className="flex  gap-4 mb-4" >
                        <Image src={'/qrcode.svg'}
                            alt="QR Code"
                            width={120}
                            height={100} />
                        <div className="w-40 h-12 ">
                            <div className=" border rounded flex gap-2 ">
                                <Image
                                    src={'/googleplay1.png'}
                                    alt="Play Store"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="inline-block w-7 h-9 my-2 ml-3" />
                                <div >
                                    <span className="text-[10px]  ml-3">GET IT ON</span>
                                    <p className="text-[15px] text-xl font-semibold ml-1"> Google Play</p>
                                </div>
                            </div>
                            <div className="flex gap-2 border rounded mt-3">
                                <Image
                                    src={'/app.png'}
                                    alt="Play Store"
                                    width={45}
                                    height={40}
                                className="inline-block w-12 h-9 my-2" />
                                <div >
                                    <span  className="text-[7px]">DOWNLOAD ON THE</span>
                                    <p className="text-[15px] text-xl font-semibold"> App Store</p>
                                </div>
                            </div>
                        </div>
                    </div>
                          <div className="flex gap-15 mt-15">
                        <FaFacebookF size={30}/>
                        <FaTwitter size={30}/>
                        <FaInstagram size={30}/>
                        <FaLinkedin size={30}/>
                    </div>
                    </div>
                </div>
                <hr className="mt-10 text-gray-600"></hr>
                <p className="text-center mt-5 text-gray-600">Copyright Rimel 2022. All right reserved</p>
        </footer>
    )

};
export default Footer