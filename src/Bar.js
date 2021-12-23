function Bar(props) {
    const { height = 0, width = 0, color = "red"} = props;

    return <div key={height} style={{ 
            height: height,
            width: `${width}vw`,
            backgroundColor: color,
            borderRadius: '10px',
            margin: '0vh 0.5vw',
        }} className="Bar"></div>

       
}

export default Bar;