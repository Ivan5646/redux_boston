// Cannot read property 'map' of undefined
  return (
   <p>{
    this.props.posts.posts.map((post) =>{ 
      return (
        <div>{post.title}</div>
      ) 
    })
   }</p>  
  )


//tried ro render on the page
class Posts extends Component {

    componentDidMount(){
        this.props.fetchPostsWithRedux() //how do I handle this?
    }

    render(){
       var myData = this.props.posts;

      return (
        <div>{(myData) => {
          obj = myData;
          for(var property in obj) {
            var innerObj = obj[property];
            for(var x in innerObj) {
                return <div>{innerObj[x].title}</div>
            }
          }
        }
      }</div>

      )
    }
}


for(var property in obj) {
    var innerObj = obj[property];
    for(var x in innerObj) {
        return <div>{innerObj[x].id innerObj[x].title}</div>
    }
}

cpnvert object to array
var dataArray = new Array;
for(var o in obj) {
    dataArray.push(obj[o]);
}

<ul>
    <li onClick={() => this.props.test()}>test list item</li>
{
    this.props.posts && 
    this.props.posts.map((post) =>{ 
        return(
            <li>{post.title}</li>
            )
    })
}
</ul>




    render() {
        var obj = this.props.posts;
        console.log("before converting to object: " + obj);

        for(var property in obj) {
            console.log("(for in statement) " + property + ": " + obj[property]);
            var innerObj = obj[property];
            for(var x in innerObj) {
                console.log("innerObj: " + x + ": " + innerObj[x]);
                var innerObj2 = innerObj[x];
                for(var y in innerObj2) {
                    console.log("innerObj2: " + y + ": " + innerObj2[y]);
                }
            }
        }


        for(var property in obj) {
            var innerObj = obj[property];
            for(var x in innerObj) {
                var innerObj2 = innerObj[x];
                var renderElx = innerObj[x];
                for(var y in innerObj2) {
                    var renderEl = innerObj2[y];
                }
            }
        }

        function getValue() {
            
        }

      return (
            <p>{renderEl}</p>
        )
    }
}


https://www.reddit.com/r/reactjs/comments/32vtsn/loop_through_an_object_inside_of_the_render_method/
{Object.keys(yourObject).map(function(key) {
    return <div>Key: {key}, Value: {yourObject[key]}</div>;
})}






function iterateObject(obj) {
  for(var property in obj) {
    var innerObj = obj[property];
    for(var x in innerObj) {
        return innerObj[x].title
    }
  }
}