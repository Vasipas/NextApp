import { CSSProperties } from 'react'

const Loader = () => {
  return (
    <div className="wrapper">
      <div className="item" style={{ '--item': 0 } as CSSProperties} />
      <div className="item" style={{ '--item': 1 } as CSSProperties} />
      <div className="item" style={{ '--item': 2 } as CSSProperties} />
      <div className="item" style={{ '--item': 3 } as CSSProperties} />
      <div className="item" style={{ '--item': 4 } as CSSProperties} />
      <div className="item" style={{ '--item': 5 } as CSSProperties} />
      <div className="item" style={{ '--item': 6 } as CSSProperties} />
    </div>
  )
}

export default Loader
