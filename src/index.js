const element = document.getElementById('root');
const cr = React.createElement;

const Td = (props) => <td key={props.name}>__{props.name}__</td>

const Tr = ({number, height}) => <tr style={{height: height}}><Td name={"Sergey " + number} /></tr>;

const App = ({count, rowHeight, trCount}) => {
  const [start, changeStart] = React.useState(0);
  const wrapperTableRef = React.useRef();

  function getTopScrollingPosition() {
    return start * rowHeight;
  }

  function getBottomScrollingPosition(length) {
    return rowHeight * (length - (start + trCount));
  }

  function onScroll(e) {
    const newStart = Math.floor(e.target.scrollTop / rowHeight);
    changeStart(newStart);
  }

  React.useEffect(() => {
    wrapperTableRef.current.addEventListener('scroll', onScroll);
    () => wrapperTableRef.current.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div 
      ref={wrapperTableRef} 
      style={{height: trCount * rowHeight + 1 + 'px', overflow: 'auto'}}
    >
      <div style={{height: getTopScrollingPosition()}}></div>
      <table style={{borderSpacing: "0px"}}>
        <tbody>
          {new Array(count).slice(start, start + trCount).fill(Tr).map((E, i) => {
            return <E key={start + i} number={start + i} height={rowHeight}/>
          })}
        </tbody>
      </table>
      <div style={{height: getBottomScrollingPosition(count)}}></div>
    </div>
  )
}



ReactDOM.render(<App count={100000} rowHeight={30} trCount={10}/>, element);
