/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */
document.write('<script src="./src/core/tangram.js"></script>');
/* import er */
document.write('<script src="./src/core/er.js"></script>');
document.write('<script src="./src/core/er/config.js"></script>');
document.write('<script src="./src/core/er/_util.js"></script>');
document.write('<script src="./src/core/er/init.js"></script>');
document.write('<script src="./src/core/er/context.js"></script>');
document.write('<script src="./src/core/er/template.js"></script>');
document.write('<script src="./src/core/er/controller.js"></script>');
document.write('<script src="./src/core/er/locator.js"></script>');
document.write('<script src="./src/core/er/router.js"></script>');
document.write('<script src="./src/core/er/Model.js"></script>');
document.write('<script src="./src/core/er/IAction.js"></script>');
document.write('<script src="./src/core/er/AbstractAction.js"></script>');
document.write('<script src="./src/core/er/Action.js"></script>');
document.write('<script src="./src/core/er/View.js"></script>');
document.write('<script src="./src/core/er/Module.js"></script>');
document.write('<script src="./src/core/er/extend.js"></script>');
document.write('<script src="./src/core/er/extend/action_like_form.js"></script>');
document.write('<script src="./src/core/er/extend/action_enhance.js"></script>');

/* import esui */
document.write('<script src="./src/core/er/extend/ui.js"></script>');
document.write('<script src="./src/core/esui.js"></script>');
document.write('<script src="./src/core/esui/config.js"></script>');
document.write('<script src="./src/core/esui/util.js"></script>');
document.write('<script src="./src/core/esui/create.js"></script>');
document.write('<script src="./src/core/esui/dispose.js"></script>');
document.write('<script src="./src/core/esui/get.js"></script>');
document.write('<script src="./src/core/esui/init.js"></script>');
document.write('<script src="./src/core/esui/Control.js"></script>');
document.write('<script src="./src/core/esui/validator.js"></script>');
document.write('<script src="./src/core/esui/validator/Rule.js"></script>');
document.write('<script src="./src/core/esui/validator/Validity.js"></script>');
document.write('<script src="./src/core/esui/validator/ValidityState.js"></script>');
document.write('<script src="./src/core/esui/validator/MaxLengthRule.js"></script>');
document.write('<script src="./src/core/esui/validator/RequiredRule.js"></script>');
document.write('<script src="./src/core/esui/validator/MaxValueRule.js"></script>');
document.write('<script src="./src/core/esui/validator/MinValueRule.js"></script>');
document.write('<script src="./src/core/esui/validator/PatternRule.js"></script>');
document.write('<script src="./src/core/esui/InputControl.js"></script>');
document.write('<script src="./src/core/esui/BoxControl.js"></script>');
document.write('<script src="./src/core/esui/Layer.js"></script>');
document.write('<script src="./src/core/esui/Button.js"></script>');
document.write('<script src="./src/core/esui/Calendar.js"></script>');
document.write('<script src="./src/core/esui/CheckBox.js"></script>');
document.write('<script src="./src/core/esui/Radio.js"></script>');
document.write('<script src="./src/core/esui/Dialog.js"></script>');
document.write('<script src="./src/core/esui/FormTab.js"></script>');
document.write('<script src="./src/core/esui/Label.js"></script>');
document.write('<script src="./src/core/esui/Link.js"></script>');
document.write('<script src="./src/core/esui/MonthView.js"></script>');
document.write('<script src="./src/core/esui/MiniMultiCalendar.js"></script>');
document.write('<script src="./src/core/esui/MultiCalendar.js"></script>');
document.write('<script src="./src/core/esui/Pager.js"></script>');
document.write('<script src="./src/core/esui/Region.js"></script>');
document.write('<script src="./src/core/esui/Schedule.js"></script>');
document.write('<script src="./src/core/esui/Select.js"></script>');
document.write('<script src="./src/core/esui/SideBar.js"></script>');
document.write('<script src="./src/core/esui/Tab.js"></script>');
document.write('<script src="./src/core/esui/Table.js"></script>');
document.write('<script src="./src/core/esui/TextInput.js"></script>');
document.write('<script src="./src/core/esui/TextLine.js"></script>');
document.write('<script src="./src/core/esui/Tip.js"></script>');
document.write('<script src="./src/core/esui/TreeView.js"></script>');

/* import app */
document.write('<script src="./src/business/{%= name %}.js"></script>');
document.write('<script src="./src/business/config.js"></script>');
document.write('<script src="./src/loadtpl.js"></script>');
document.write('<script src="./src/business/sample.js"></script>');
document.write('<script src="./src/business/sample/index.js"></script>');

