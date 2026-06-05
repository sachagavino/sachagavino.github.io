import { useState } from 'react'
import { fileTreeData } from './data'
import { MarkdownIcon } from './icons'
import './FileTree.css'

const FolderIcon = ({ isOpen }) => (
  <svg className="tree-icon tree-icon--folder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    {isOpen
      ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
      : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    }
  </svg>
)

const ChevronIcon = ({ isOpen }) => (
  <svg className={`tree-chevron ${isOpen ? 'tree-chevron--open' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
)

const TreeNode = ({ item, selectedFile, onFileSelect }) => {
  const isFolder = item.type === 'folder'
  const [isOpen, setIsOpen] = useState(true)
  const isSelected = !isFolder && selectedFile === item.name

  const handleClick = () => {
    if (isFolder) setIsOpen(o => !o)
    else onFileSelect(item.name)
  }

  const FileIcon = item.icon || MarkdownIcon

  return (
    <div className="tree-node">
      <div
        className={`tree-row ${isSelected ? 'tree-row--selected' : ''}`}
        onClick={handleClick}
      >
        {isFolder ? <ChevronIcon isOpen={isOpen} /> : <span className="tree-spacer" />}
        {isFolder ? <FolderIcon isOpen={isOpen} /> : <FileIcon />}
        <span className="tree-name">{item.name}</span>
      </div>

      {isFolder && (
        <div className={`tree-children ${isOpen ? 'tree-children--open' : ''}`}>
          <div className="tree-connector" />
          {item.children?.map(child => (
            <TreeNode
              key={child.name}
              item={child}
              selectedFile={selectedFile}
              onFileSelect={onFileSelect}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function FileTree({ selectedFile, onFileSelect }) {
  return (
    <div className="filetree">
      <div className="filetree-header">sachagavino.github.io</div>
      {fileTreeData.map(item => (
        <TreeNode
          key={item.name}
          item={item}
          selectedFile={selectedFile}
          onFileSelect={onFileSelect}
        />
      ))}
    </div>
  )
}
