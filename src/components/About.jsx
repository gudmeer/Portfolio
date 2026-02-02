import aboutData from "../data/aboutData.jsx";
import Tippy from '@tippyjs/react';
import Swal from 'sweetalert2';

const About = () => {
    const resumeButtonClasses = `inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1
        bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-100 hover:text-gray-900`;

    return (
        <section
            id="about"
            className="min-h-screen bg-white pt-20 overflow-hidden"
            data-aos="fade-down"
            data-aos-duration="1000"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <header className="text-center text-gray-900 mb-12">
                    <h2 className="text-5xl font-bold mb-2">{aboutData.title}</h2>
                    <p className="text-lg text-gray-700">{aboutData.subtitle}</p>
                </header>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start py-12 min-h-[calc(100vh-5rem)]">
                    {/* Profile + Image (left column spanning 1/3) */}
                    <div className="lg:col-span-1 space-y-6" data-aos-delay="600" data-aos="fade-right">
                        <div className="w-full flex justify-center lg:justify-start">
                            <img
                                src={aboutData.image}
                                alt="About Me"
                                className="w-full max-w-sm rounded-xl shadow-lg object-cover
                                    border-8 border-white
                                    hover:shadow-3xl hover:-translate-y-2
                                    transition-all duration-300"
                            />
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Profile</h3>
                            <p className="text-gray-700 leading-relaxed">{aboutData.profile || "Add a short professional headline here."}</p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Domain</h3>
                            <p className="text-gray-700 leading-relaxed">{aboutData.domain || "Domain details (e.g. Backend Development, OS, Software Architecture)."}</p>
                        </div>

                        <Tippy content="Download My Resume">
                            <button
                                onClick={() => {
                                    Swal.fire({
                                        title: "Not Available Yet 😅",
                                        text: "My resume is still in progress. Please check back later!",
                                        icon: "info",
                                        confirmButtonColor: "#1F2937",
                                        confirmButtonText: "Alright",
                                    });
                                }}
                                className={resumeButtonClasses}
                                aria-label="Download Resume"
                            >
                                <i className={`${aboutData.resume?.icon || 'bx bx-download'} text-lg mr-2`} aria-hidden="true"></i>
                                {aboutData.resume?.label || 'Download Resume'}
                            </button>
                        </Tippy>
                    </div>

                    {/* Extended Info - middle column spanning 2/3 */}
                    <div className="lg:col-span-2 space-y-6" data-aos-delay="600" data-aos="fade-down">
                        {/* About Narrative - Two Columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Who Am I</h3>
                                <p className="text-gray-700 leading-relaxed">{aboutData.aboutNarrative?.whoAmI?.text}</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-2">My Approach</h3>
                                <p className="text-gray-700 leading-relaxed">{aboutData.aboutNarrative?.approach?.text}</p>
                            </div>
                        </div>

                        {/* More About Me */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                            <h3 className="text-2xl font-bold mb-4">More About Me</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">{aboutData.moreAboutMe?.intro || 'A short intro about your background and motivations.'}</p>
                            <p className="text-gray-700 leading-relaxed">{aboutData.moreAboutMe?.details || 'A more detailed paragraph where you can add achievements, projects, or stories.'}</p>
                        </div>

                        {/* Cards: Education, Languages, Tools, Skills, Interests */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                                <h4 className="text-lg font-semibold mb-2">Education</h4>
                                {aboutData.education?.length ? (
                                    <ul className="text-gray-700 list-disc ml-5">
                                        {aboutData.education.map((edu, i) => (
                                            <li key={i} className="mb-1">
                                                <span className="font-semibold">{edu.degree}</span>
                                                {edu.institution ? <span> — {edu.institution}</span> : null}
                                                {edu.period ? <span className="text-sm text-gray-500"> ({edu.period})</span> : null}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-700">{aboutData.educationPlaceholder || 'B.Sc. in Scientific Computing (in progress)'}</p>
                                )}
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                                <h4 className="text-lg font-semibold mb-2">Languages</h4>
                                <div className="flex flex-wrap gap-2">
                                    {(aboutData.languages && aboutData.languages.length) ? (
                                        aboutData.languages.map((lang, i) => (
                                            <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{lang}</span>
                                        ))
                                    ) : (
                                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Spanish — English (Intermediate)</span>
                                    )}
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                                <h4 className="text-lg font-semibold mb-2">Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    {(aboutData.tools && aboutData.tools.length) ? (
                                        aboutData.tools.map((tool, i) => (
                                            <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{tool}</span>
                                        ))
                                    ) : (
                                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Git · CLI tools · Linux Environments</span>
                                    )}
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                                <h4 className="text-lg font-semibold mb-2">Other Skills</h4>
                                <div className="text-gray-700">
                                    {(aboutData.otherSkills && aboutData.otherSkills.length) ? (
                                        <ul className="list-disc ml-5">
                                            {aboutData.otherSkills.map((s, i) => <li key={i}>{s}</li>)}
                                        </ul>
                                    ) : (
                                        <p>Python, C++, Assembly (basic), Linux, Git, CLI tools, CCNA (Intro)</p>
                                    )}
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md md:col-span-2">
                                <h4 className="text-lg font-semibold mb-2">Interests</h4>
                                <p className="text-gray-700">{aboutData.interests || 'Software Architecture · Distributed Systems · Server Infrastructure · Linux · System Programming · API Design · Artificial Intelligence · Automation'}</p>
                            </div>
                        </div>

                        {/* Personal Info Compact */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                            <h4 className="text-lg font-semibold mb-2">Personal Info</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                                {aboutData.biodata?.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <i className={`${item.icon} mt-1`}></i>
                                        <div>
                                            <div className="font-semibold">{item.label}</div>
                                            <div>{item.value}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
