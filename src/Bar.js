function Bar(props) {
    const { height = 0, width = 0, color = "red"} = props;

    return <div style={{ 
            height: height,
            width: width,
            backgroundColor: color
        }}></div>

       
}

export default Bar;