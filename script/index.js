function main(){
    let http = new XMLHttpRequest();
    http.open('GET', 'https://swapi.dev/api/people', true);

    http.onload = function(){
        if(this.status == 200){
            let users = JSON.parse(this.responseText);
            let { results } = users;
            console.log(results)
            document.getElementById('rows').innerHTML = '';

            for(let i = 0; i <= results.length; i++){
                let {name, gender, height}= results[i];
                console.log(name, gender, height);
                let imgPath = `./images/character${i}.jpg`;
                document.getElementById('rows').innerHTML += `<main class="col-lg-3 col-sm-6">
                <img
                  src= ${imgPath}
                  title = "Click the named button for more info"
                  class="img-responsive img-rounded"
                  alt="${name}, a ${gender} with height: ${height}"
                  srcset=""
                  width="100%"
                  height="100%"
                />
        
                <button
                  type="button"
                  class="btn btn-info btn-lg"
                  data-toggle="modal"
                  data-target="#myModal${i}"
                >
                  ${name}
                </button>
                <div class="modal fade" id="myModal${i}" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                        &times;
                        </button>
                        <h4 class="modal-title text-center">${name}</h4>
                    </div>
                    <div class="modal-body">
                        <img src="./images/character${i}.jpg" width="100%" height="100%" />
                        <p class="text-danger">A dummy picture for this character</p>
                        <ul class="no-bullets">
                            <li>Name: ${name}</li>
                            <li>Gender: ${gender}</li>
                            <li>Height: ${height}cm</li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">
                        Close
                        </button>
                    </div>
                    </div>
                </div>
    </div>
              </main>
        `
             }       
        }
    }
    http.send()
}

main()

// module.exports = {main}

const element = document.querySelector('.move');

function move() {
  element.style.transform = 'translateX(-100%)';
  setTimeout(() => {
    element.style.transform = 'translateX(0)';
    setTimeout(move, 8000);
  }, 5000);
}

move();
