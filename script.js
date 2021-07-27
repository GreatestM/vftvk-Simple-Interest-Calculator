<html>
    <head>
    <title>Simple Interest Calculator</title>

    <link rel="stylesheet" href="style.css">
    <script src="script.js"> </script>
    </head>
    <body>
    <div class="maindiv">
        <h1>Simple Interest Calculator</h1>
        <form action="/action_page.php">
        <label for="principal">Amount</label>
        <input type="number" id="principal" name="principal" min="1" required="true"><br><br>
        </form>     
        Interest Rate <input type="range"  id="rate" min="1" max="20" step="0.25" value="10.25" onchange="updateRate(this.value)">
        <span id="rate_val">
            10.25%
        </span> <br/>
        No. of Years <select id="years">
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
           <option value="6">6</option>
           <option value="7">7</option>
           <option value="8">8</option>
           <option value="9">9</option>
           <option value="10">10</option>
        </select> <br>  
        <button id="button-style" onclick="compute()">Compute Interest</button> <br>
        <span id="result">
        </span>     
        <footer>
            &#169; This Calculator belongs to -Baida Achkar
        </footer>
    </div>  
    </body>
  </html>
      
