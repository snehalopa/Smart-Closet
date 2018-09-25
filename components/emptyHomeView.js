//Get screen width using Dimensions component 
var {width} = Dimensions.get('window');
//....
//In image style 
image:{
   width: width * 0.5
}
//In render function
<Image resizeMode = 'cover' style = {styles.image}/>