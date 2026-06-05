import { useState } from 'react'
import LightPillar from './components/backgrounds/LightPillar'
import DecryptedText from './components/text/DecryptedText'
import FileTree from './components/filetree/FileTree'
import { fileContents } from './components/filetree/data'
import './App.css'

export default function App() {
  const [selectedFile, setSelectedFile] = useState('README.md')
  const FileContent = selectedFile ? fileContents[selectedFile] : null

  return (
    <div className="app">
      <div className="background">
        <LightPillar
          topColor="#169fa0"
          bottomColor="#e3965b"
          intensity={1.1}
          rotationSpeed={0.4}
          glowAmount={0.003}
          pillarWidth={0.9}
          pillarHeight={0.2}
          noiseIntensity={.8}
          pillarRotation={198}
          interactive={false}
          mixBlendMode="normal"
          quality="medium"
        />
      </div>

      <aside className="sidebar">
        <FileTree selectedFile={selectedFile} onFileSelect={setSelectedFile} />
      </aside>

      <main className="content">
        <section className="hero">
          <h1 className="site-title">
            <DecryptedText
              text="SACHA"
              animateOn="view"
              sequential={true}
              revealDirection="start"
              speed={95}
              className="site-title-firstname"
              encryptedClassName="site-title-encrypted"
            />
            {' '}
            <DecryptedText
              text="GAVINO"
              animateOn="view"
              sequential={true}
              revealDirection="start"
              speed={95}
              className="site-title-lastname"
              encryptedClassName="site-title-encrypted"
            />
          </h1>
          <p className="site-subtitle">Postdoctoral Research Fellow in astrophysics</p>
          <p className="site-subtitle">Department of Physics and Astrophysics, University of Bologna</p>
        </section>

        {FileContent && (
          <div className="file-panel">
            <div className="file-panel-header">{selectedFile}</div>
            <div className="file-panel-body">
              <FileContent />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
