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