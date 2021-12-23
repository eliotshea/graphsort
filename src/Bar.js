function Bar(props) {
    const { height = 0, width = 0, color = "red"} = props;

    return <div key={height} style={{ 
            height: height,
            width: `${width}%`,
            backgroundColor: color,
            borderRadius: '10px',
        }} className="Bar"></div>

       
}

export default Bar;