$(document).ready(function () {
  if (typeof multiple_action_ids !== "undefined") {
    var store_name = multiple_action_ids;
    var ids = localStorage.getItem(store_name);
    var checked_count = 0;
    if (ids == undefined) ids = "";

    $("#checkAll").change(function () {
      var a = $(".selectable"),
        l = $(this).prop("checked");
      a.prop("checked", l);
      set_selected();
    });


    $(".selectable").change(function () { set_selected(); });

    $("#multiple_action_unchek_all").click(function () {
      localStorage.setItem(store_name, "");
      $(".selectable").prop("checked", false);
      set_selected();
    });


    function set_selected() {
      var n = $(".selectable");
      ids = localStorage.getItem(store_name);
      if (ids == undefined) ids = "";

      var local_checked_count = 0;

      n.each(function () {
        var v = "," + this.value;
        if (this.checked) {
          local_checked_count += 1;
          if (ids.indexOf(v) < 0) ids += v;
        } else {
          ids = ids.replace(v, "");
        }
      });

      multiple_action_update_values(ids, local_checked_count);
    }

    if (ids.length > 0) $("#multiple_action").show();

    $("#multiple_action_count").html(ids.split(",").length - 1);

    $(".selectable").each(function () {
      if (ids.indexOf("," + $(this).val()) >= 0) {
        checked_count += 1;
        $(this).prop("checked", "checked");
      }
    });
    
    multiple_action_update_values(ids, checked_count);

    function multiple_action_update_values(ids, checked_count) {
      localStorage.setItem(store_name, ids);

      if (ids.length > 0) {
        $("#multiple_action").show(200);
        $("#multiple_action_count").html(ids.split(",").length - 1);
      } else {
        $("#multiple_action_count").html("");
        $("#multiple_action").hide(200);
      }

      $("#multiple_action_itens").val(ids);

      if (checked_count == $(".selectable").length) {
        $("#checkAll").prop("checked", "checked");
      } else {
        $("#checkAll").prop("checked", false);
      }
    }
  }
});
