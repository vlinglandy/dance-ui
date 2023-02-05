import { ReactElement } from 'react'
import reactLogo from './assets/react.svg'
import { Button, Icon, Space, IconType } from '@dance-ui/ui'
import './App.css'

const App = (): ReactElement => {
  const renderAllIcon = () => {
    const icons = []
    for (const key in IconType) {
      const value = (IconType as any)[key]
      icons.push(value)
    }
    return (
      <>
        {icons.map((icon) => (
          <div key={icon}>
            {icon}:
            <Icon type={icon} style={{ fontSize: 46, color: 'black' }} href={'https://github.com/dancing-team/dance-ui'} />
          </div>
        ))}
      </>
    )
  }
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Demo</h1>
      <div className="card">
        <div>Icons {renderAllIcon()}</div>
        <Space justify="center" direction="vertical" align="center">
          <Space gap="large" style={{ backgroundColor: 'red' }}>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </Space>
          <Space gap="middle" style={{ backgroundColor: 'blue' }}>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </Space>
          <Space direction="vertical">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </Space>
        </Space>
        <Button
          size="large"
          onClick={() => {
            alert('hello')
          }}>
          large
        </Button>
        <Button
          size="middle"
          onClick={() => {
            alert('hello')
          }}>
          large
        </Button>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
