//detail time 
export const mapTime = timestamp => {
    const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);
  
    let interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return `${interval} years`;
    }
    interval = Math.floor(seconds / 2592000);
  
    if (interval > 1) {
      return `${interval} months`;
    }
    interval = Math.floor(seconds / 86400);
  
    if (interval > 1) {
      return `${interval} days`;
    }
    interval = Math.floor(seconds / 3600);
  
    if (interval > 1) {
      return `${interval} hours`;
    }
    interval = Math.floor(seconds / 60);
  
    if (interval > 1) {
      return `${interval} minutes`;
    }
  
    return `${Math.floor(seconds)} seconds`;
  };


//category name
export const category = [{
  id: 1,
  name: "topstories"
},
{  
  id: 2,
  name: "newstories"

},
{  
  id: 3,
  name: "askstories"
},
{
  id: 4,
  name: "showstories"
},
{
  id: 5,
  name: "jobstories"
}
  
]