# ngConnect
API for integrating 3D Views with Websites and Mobile Applications

Follow these steps for integration on PLP (Product Listing Page)
1.  Copy the JavaScript from 'PLP.php' page on to your website’s product listing frontpage. Pass the values  (SKU_ID - (Item_id) and 1 – (Flag).
2. Declare the values within the function - username, password, API_KEY. (These values will be provided by us).
2. Explicitly call the function when the document has finished loading.
3. The AJAX call will determine whether a Model for the SKU ID that has been passed into the function exists or not. Based on which it will send API Responses.
The responses are :-
A) URL -  If the model exists
B) 00 – If there is no request with such a model
C) 0 – The request exists but the model does not exist
D) 2 – If the combination of the username and password is incorrect
E) 3 – If the API_KEY is incorrect
(Note 1 – These steps can be removed if you have a flag on your own database to determine availability of the model. We could share a list of SKU’s for which the models are live and it can be updated in your database. This is only to give flexibility of integration).
4. Based on the response, you could check the response code and appropriately handle any errors. In a successful API call the URL to the model is returned. Which can used as the source attribute of an <iframe> tag.
For e.g. In Jquery :-
$(‘iframe’).attr(‘src’, resp) – Here ‘resp’ being the response variable of the AJAX call.
4. The flag parameter in the function tells the function what is to be done after the call is completed. 
Flag (1) -  Typically used to display a button in a defined div which when clicked will display the model. (You could use Jquery append/html functions to do this.).
Flag (2) -  Will display the model. (This could make the division where the <iframe> exists visible while updating the source of the <iframe tag at the same time.)
Note  2 (Only requests from whitelisted URLs will display the 3D Views. An ‘Unauthenticated Request Error’ will be produced otherwise.)
Please refer to the ‘code.js’ file for the script. It has comments to understand what goes where. Feel free to reach out to us in case you have any questions about the integration.

