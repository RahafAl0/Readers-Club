

const UserProgress = (props) => {
    return(
        <div style={{background:props.bgColor, color:props.fontColor,  width: '110px', height: '110px'}} >
          {props.text}
          {props.status}
        </div>
  )
    
}

export default UserProgress;