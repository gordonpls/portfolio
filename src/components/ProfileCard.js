import { BrowserView, MobileView } from 'react-device-detect';

import ProfileInfo from "../subcomponents/ProfileCard/ProfileInfo";
import LifeQuote from '../subcomponents/AboutMe/LifeQuote';
import avatar from '../assets/avatar.jpeg';
import resume from '../assets/gordon_zhong_resume.pdf';

const ResumeURL = 'https://drive.google.com/file/d/1yGJ3dQFAbppkOuUj9vHpaObKWCFG6yGe/view?usp=drive_link';

const ProfileCard = () => {
    return (
        <div className="h-[650px]">
            <div className="text-center rounded-lg artboard h-full bg-primary-content ring-4 ring-primary ring-offset-4">
                <div className="avatar">
                    <div className="w-32 rounded-xl ring-2 ring-primary ring-offset-4" style={{ transform: 'translateY(-20px)' }}>
                        <img src={avatar} alt="avatar" />
                    </div>
                </div>
                <div>
                    <p className="text-primary text-2xl">Gordon Zhong</p>
                    <div className="flex flex-row justify-center gap-4 py-4">
                        <div className="badge badge-secondary text-white">INFJ-A</div>
                        <div className="badge badge-secondary text-white">Libra</div>
                        <div className="badge badge-secondary text-white">Night Owl</div>
                    </div>
                    <ProfileInfo emailAddress="gordon@zhong.ventures" />
                </div>
                <div className="pt-8">
                    <BrowserView>
                        {/* Open the modal using ID.showModal() method */}
                        <button className="btn btn-primary uppercase" onClick={() => window.resume_modal.showModal()}>View Resume</button>
                        <dialog id="resume_modal" className="modal">
                            <form method="dialog" className="modal-box max-h-none max-w-none h-fit w-fit md:h-[50vw] md:w-[60vw] overflow-auto">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-1 top-1">✕</button>
                                <iframe src={resume} height="100%" width="100%" allowFullScreen={true}></iframe>
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
        </div>

    )
}

export default ProfileCard;