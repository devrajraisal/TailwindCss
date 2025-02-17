const dropdownButton = document.getElementById("dropdownButton");
                        const dropdownMenu = document.getElementById("dropdownMenu");
                        const selectedValue = document.getElementById("selectedValue");
                    
                    
                        dropdownButton.addEventListener("click", () => {
                          dropdownMenu.classList.toggle("hidden");
                        });
                    
                        
                        document.querySelectorAll("#dropdownMenu li").forEach(option => {
                          option.addEventListener("click", () => {
                            selectedValue.innerText = option.innerText; 
                            dropdownMenu.classList.add("hidden"); 
                          });
                        });
                    
                    
                        document.addEventListener("click", (e) => {
                          if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
                            dropdownMenu.classList.add("hidden");
                          }
                        });