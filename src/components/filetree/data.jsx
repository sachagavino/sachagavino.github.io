import { TelescopeIcon, PaperIcon, PersonIcon, PythonIcon } from './icons'

export const fileTreeData = [
  { name: 'README.md', type: 'file'},
  {
    name: 'research',
    type: 'folder',
    children: [
      { name: 'disk-temperature.md', type: 'file', icon: TelescopeIcon },
      { name: 'co-snowline.md', type: 'file', icon: TelescopeIcon },
      { name: 'cloud-cores.md', type: 'file', icon: TelescopeIcon },
      { name: 'orbital-stability.md', type: 'file', icon: TelescopeIcon },
    ]
  },
  { name: 'cv.py', type: 'file', icon: PythonIcon },
  { name: 'publications.md', type: 'file', icon: PaperIcon },
]

export const fileContents = {
  'README.md': () => (
    <>
      <p>Welcome to my personal webpage. I am a postdoctoral researcher working at the Department of Physics and Astrophysics, University of Bologna.</p>
      <p>My work mainly focuses on star and planet formation. I develop thermochemical models of protoplanetary disks to characterize the interaction between dust particles and the radiation field in a polydispersed environment, and to understand the impact of dust temperature and evolution on the material delivered to planetary cores.</p>
      <p>I use radiotelescopes to directly probe stellar formation regions and protoplanetary disks. I am also interested in orbital dynamics.</p>
      <p>In my spare time, I read about the history of science, do 3D modeling, and I play the piano when my neighbors are away.</p>
      <p className="file-contact">
        <span>Email:</span> sacha.gavino [at] unibo.it<br />
        <span>Address:</span> viale Berti Pichat 6/2, 40127 Bologna, Italy
      </p>
    </>
  ),
  'disk-temperature.md': () => (
    <>
      <h3>Temperature-dependent size distribution in a protoplanetary disk</h3>
      <p>The figure shows the dust temperature in the midplane of a disk model composed of two dust populations, a large and a small one. The two dust populations don't have the same temperature because the absorption/emission opacity is size-dependent: they are not heated with the same efficiency.</p>
      <p>Therefore, once the disk becomes vertically optically thin enough, the dust temperatures become thermally decoupled. A single-population model cannot account for the difference in temperature between various dust species.</p>
      <a href="https://www.aanda.org/component/article?access=doi&doi=10.1051/0004-6361/202346767" className="file-link" target="_blank" rel="noreferrer">View article →</a>
    </>
  ),
  'co-snowline.md': () => (
    <>
      <h3>CO snowline segregation in a protoplanetary disk</h3>
      <p>CO ice forms only on the large dust population. Since the large grains are globally colder, CO can stick on their surface much closer to the star.</p>
      <p>However, once the small grains become cold enough, CO starts sticking on them (from ~250 au), and the CO ice abundance on the large grains dramatically decreases because most of the surface area is on the small grains. The CO snowline of the large grains thus forms a closed 'bubble'.</p>
      <a href="https://www.aanda.org/component/article?access=doi&doi=10.1051/0004-6361/202346767" className="file-link" target="_blank" rel="noreferrer">View article →</a>
    </>
  ),
  'cloud-cores.md': () => (
    <>
      <h3>Protostellar cloud cores with multiple dust species</h3>
      <p>Model comparison of CO gas-phase in the protostellar envelope. The upper left panel shows a thermochemical model using a full grain size-distribution based on three-dimensional magnetohydrodynamics simulations. The other panels show similar simulations using a simpler dust model.</p>
      <p className="file-tag">in prep</p>
    </>
  ),
  'orbital-stability.md': () => (
    <>
      <h3>Stability of three-planet systems</h3>
      <p>The Kepler telescope has found hundreds of multi-planetary systems in the galaxy. Many of these systems are closely-packed and can survive for very long timescales.</p>
      <p>I perform direct numerical integrations of very compact three-planet systems to understand the role of orbital parameters and mean-motion resonance in system stability. We find that if a three-body resonance relation exists between the initial angles, it can allow a compact system to remain stable.</p>
      <a href="https://ui.adsabs.harvard.edu/abs/2021Icar..36414470L/abstract" className="file-link" target="_blank" rel="noreferrer">Read in ADS →</a>
    </>
  ),
  'cv.md': () => (
    <>
      <h3>Research</h3>
      <div className="cv-entry">
        <span className="cv-date">2024 – Present</span>
        <p>Postdoctoral Research Fellow, Department of Physics and Astrophysics, University of Bologna.</p>
      </div>
      <div className="cv-entry">
        <span className="cv-date">2021 – 2024</span>
        <p>Postdoctoral position at Niels Bohr Institute, University of Copenhagen, in Jes Jørgensen's group. Associate for the ALMA Large Program eDisk.</p>
      </div>
      <div className="cv-entry">
        <span className="cv-date">2017 – 2021</span>
        <p>PhD student at Laboratoire d'Astrophysique de Bordeaux, CNRS, France. Supervised by Anne Dutrey and Valentine Wakelam.</p>
      </div>
      <h3>Education</h3>
      <div className="cv-entry">
        <span className="cv-date">2017 – 2021</span>
        <p>PhD in Astrophysics</p>
      </div>
      <div className="cv-entry">
        <span className="cv-date">2015 – 2017</span>
        <p>Master's degree in Physics and Astrophysics. Internships at SETI Institute (2016) and NASA Ames (2017).</p>
      </div>
      <div className="cv-entry">
        <span className="cv-date">2012 – 2015</span>
        <p>Bachelor's degree in Physics. Internships at DGA Saclay (2014) and Paris Observatory (2015).</p>
      </div>
      <h3>Skills</h3>
      <p><span className="cv-label">Languages:</span> Python, Fortran, Bash</p>
      <p><span className="cv-label">Software:</span> NAUTILUS, RADMC3D, Dustpy, CASA, Blender</p>
      <a href="https://drive.google.com/file/d/1b7Gs6Ji2hqjrS2bu90KQAyCuJwKl8c7Y/view?usp=drive_link" className="file-link" target="_blank" rel="noreferrer">Download full CV →</a>
    </>
  ),
  'publications.md': () => (
    <>
      <h3>Publication list</h3>
      <p>Full list available on the NASA Astrophysics Data System (ADS).</p>
      <a href="https://ui.adsabs.harvard.edu/search/q=author%3A(%22gavino%2C%20s%22)&sort=date%20desc%2C%20bibcode%20desc&p_=0" className="file-link" target="_blank" rel="noreferrer">View on ADS →</a>
    </>
  ),
}
