import { BrowserView, MobileView } from 'react-device-detect';
import { useEffect, useState } from 'react';

import ProfileInfo from "../subcomponents/ProfileCard/ProfileInfo";
import LifeQuote from '../subcomponents/AboutMe/LifeQuote';

import ThemeChanger from "./ThemeChanger";

// resumeAsset is for browser view
import ResumeAsset from '../assets/Gordon Zhong Resume.pdf';

// for mobile view
const ResumeURL = 'https://drive.google.com/file/d/1UG3QI0hlq4tVhtIevGanw6oV2wn8MUQI/view?usp=drive_link';

const ProfileCard = () => {
    const src = '/avatar.jpeg';
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = src;
        image.onload = () => setLoaded(true);
        image.onerror = () => console.error('An error occurred while loading the image');
    }, [src]);

    const [showImageModal, setShowImageModal] = useState(false);
    return (
        <div className="h-[650px]">
            <div className="relative text-center rounded-lg artboard h-full bg-primary-content ring-4 ring-primary ring-offset-4">
                {/* <MobileView> */}
                    <div className="absolute top-0 right-0 m-4"> {/* Absolute positioned ThemeChanger */}
                        <ThemeChanger />
                    </div>
                {/* </MobileView> */}
                <div className="avatar select-none">
                    <div className="w-32 rounded-xl ring-2 ring-primary ring-offset-4 select-none" style={{ transform: 'translateY(-20px)' }}
                        onClick={() => setShowImageModal(true)}>
                        {loaded ? <img src={src} alt="avatar" /> : <span className="loading loading-spinner text-primary"></span>}
                    </div>
                </div>
                <div>
                    <p className="text-primary text-2xl">Gordon Zhong</p>
                    <div className="flex flex-row justify-center gap-4 py-4">
                        <div className="badge badge-secondary text-white">ENTJ-A</div>
                        <div className="badge badge-secondary text-white">Libra</div>
                        <div className="badge badge-secondary text-white">Foodie</div>
                    </div>
                    <ProfileInfo emailAddress="gordon@zhong.ventures" />
                </div>
                <div className="pt-8">
                    <BrowserView>
                        {/* Open the modal using ID.showModal() method */}
                        <button className="btn btn-primary uppercase" onClick={() => window.resume_modal.showModal()}>View Resume</button>
                        <dialog id="resume_modal" className="modal">
                            {/* <form method="dialog" className="modal-box max-h-none max-w-none h-fit w-fit md:h-[50vw] md:w-[60vw] overflow-auto"> */}
                            <form method="dialog" className="modal-box max-h-none max-w-none h-[100vh] w-[100vw] overflow-hidden">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-1 top-1">✕</button>
                                <iframe src={ResumeAsset} height="100%" width="100%" allowFullScreen={true}></iframe>
                            </form>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </BrowserView>
                    <MobileView>
                        <form action={ResumeURL} target="_blank">
                            <button className="btn btn-primary uppercase" type="submit">View Resume</button>
                        </form>
                    </MobileView>
                    <div className="text-center">
                        <LifeQuote />
                    </div>
                </div>
            </div>
            <dialog open={showImageModal} className="modal select-none" onClick={() => setShowImageModal(false)}>
                <form method="dialog" className="modal-box md:h-fit md:w-fit p-2">
                    <button className="btn btn-md btn-circle btn-ghost absolute right-1 top-1" onClick={() => setShowImageModal(false)}>x</button>
                    <img src={src} alt="avatar" />
                </form>
            </dialog>

        </div>

    )
}

export default ProfileCard;