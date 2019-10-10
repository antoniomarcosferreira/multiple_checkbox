# multiple_checkbox

Save selections to localStorage

This allows you to browse pagination or filters and select or deselect items

**very simple and minimalist**


## To use

To activate just create a variable on the page eg:

    haml
     :javascript
      var multiple_checkbox_ids = "#{params[:controller]}_#{current_account.id}_ids";

Then create a form named 'multiple_checkbox' and in the submit event send the values ​​of the variable that is in localStorage.

In your list create input checkbox with class: 'selectable'

At the top of the list create a checkbox with id: 'checkAll'


_jquery is requered_
