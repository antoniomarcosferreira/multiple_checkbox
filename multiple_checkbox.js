/**
 * multiple_checkbox_ids
 *
 * @author Antonio Marcos Ferreira <amfcode@gmail.com>
 * @version 0.0.1
 * @licence MIT
 * @preserve
 * 
 * 
 * Save selections to localStorage
 * This allows you to browse pagination or filters and select or deselect items
 * 
 * To activate just create a letiable on the page eg:
 * haml
 *  :javascript
 *    let multiple_checkbox_ids = "#{params[:controller]}_#{current_account.id}_ids";
 *
 * Then create a form named 'multiple_checkbox' and in the submit event send the values ​​of the letiable that is in localStorage.
 * In your list create input checkbox with class: 'selectable'
 * At the top of the list create a checkbox with id: 'checkAll'
 */
 
$(document).ready(function () {
  if (multiple_checkbox_ids) {
    let store_name = multiple_checkbox_ids;
    let store_name_all = store_name + "_all";

    let ids = localStorage.getItem(store_name);
    if (ids == undefined) ids = "";

    $("#checkAll").change(function () {
      let a = $(".selectable"), l = $(this).prop("checked");
      a.prop("checked", l);
      localStorage.setItem(store_name_all, l);
      if (!l) localStorage.setItem(store_name, "");
      set_selected();
    });

    $(".selectable").change(function () { set_selected(); });

    function set_selected() {
      let n = $(".selectable");
      ids = localStorage.getItem(store_name);

      if (ids == undefined) ids = "";

      n.each(function () {
        let v = "," + this.value;
        if (this.checked) {
          if (ids.indexOf(v) < 0) ids += v;
        } else {
          ids = ids.replace(v, "");
        }
      });

      localStorage.setItem(store_name, ids);

      if (ids.length > 0) {
        $("#multiple_checkbox").show(200);
      } else {
        $("#multiple_checkbox").hide(200);
      }
    }

    if (ids.length > 0) $("#multiple_checkbox").show();

    ids_all = localStorage.getItem(store_name_all);
    if (ids_all == "true") {
      $("#checkAll").prop("checked", "checked");
      $(".selectable").prop("checked", "checked");
    } else {
      $(".selectable").each(function () {
        if (ids.indexOf("," + $(this).val()) >= 0) $(this).prop("checked", "checked");
      });
    }

  }
});
