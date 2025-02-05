var DataTypes = require("sequelize").DataTypes;
var _bookeduser = require("./bookeduser");
var _bugs = require("./bugs");
var _bugsfiles = require("./bugsfiles");
var _bugsnotes = require("./bugsnotes");
var _bugstagmaster = require("./bugstagmaster");
var _bugtags = require("./bugtags");
var _buguser = require("./buguser");
var _clickupaccesstokens = require("./clickupaccesstokens");
var _clickupwebhooks = require("./clickupwebhooks");
var _client = require("./client");
var _clienthourlyrate = require("./clienthourlyrate");
var _clientstagmaster = require("./clientstagmaster");
var _clienttags = require("./clienttags");
var _clientuserhours = require("./clientuserhours");
var _compaintmeta = require("./compaintmeta");
var _companydetails = require("./companydetails");
var _complaint = require("./complaint");
var _country = require("./country");
var _currency = require("./currency");
var _dailyworkplan = require("./dailyworkplan");
var _department = require("./department");
var _designation = require("./designation");
var _documents = require("./documents");
var _educationqualification = require("./educationqualification");
var _emailtemplates = require("./emailtemplates");
var _emergencycontact = require("./emergencycontact");
var _empdepartment = require("./empdepartment");
var _employee = require("./employee");
var _employeecost = require("./employeecost");
var _empreportingperson = require("./empreportingperson");
var _errormessages = require("./errormessages");
var _exitchecklistanswers = require("./exitchecklistanswers");
var _exitchecklistparentsetps = require("./exitchecklistparentsetps");
var _exitchecklistquestions = require("./exitchecklistquestions");
var _exitchecklistresponses = require("./exitchecklistresponses");
var _exitinterview = require("./exitinterview");
var _exitinterviewanswers = require("./exitinterviewanswers");
var _exitinterviewquestions = require("./exitinterviewquestions");
var _exitinterviewresponse = require("./exitinterviewresponse");
var _exitprocessnotifications = require("./exitprocessnotifications");
var _failed_jobs = require("./failed_jobs");
var _framework_delete = require("./framework_delete");
var _general_signature_setting = require("./general_signature_setting");
var _generalcompany = require("./generalcompany");
var _grade = require("./grade");
var _group = require("./group");
var _holiday = require("./holiday");
var _housekeeping_categories = require("./housekeeping_categories");
var _housekeeping_items = require("./housekeeping_items");
var _housekeeping_report = require("./housekeeping_report");
var _industry = require("./industry");
var _industry_delete = require("./industry_delete");
var _jobapplicant = require("./jobapplicant");
var _jobapplicantemphistory = require("./jobapplicantemphistory");
var _jobapplicantreference = require("./jobapplicantreference");
var _jobmeta = require("./jobmeta");
var _jobopening = require("./jobopening");
var _jobopeningmetadata = require("./jobopeningmetadata");
var _jobs = require("./jobs");
var _leave = require("./leave");
var _leaveallocation = require("./leaveallocation");
var _leavedetail = require("./leavedetail");
var _leavedetails_leavetype = require("./leavedetails_leavetype");
var _leavetype = require("./leavetype");
var _mastertask = require("./mastertask");
var _media = require("./media");
var _migrations = require("./migrations");
var _module = require("./module");
var _monthlyaward = require("./monthlyaward");
var _monthlyawardnomination = require("./monthlyawardnomination");
var _nodemigration = require("./nodemigration");
var _notifications = require("./notifications");
var _notificationsetting = require("./notificationsetting");
var _nova_field_attachments = require("./nova_field_attachments");
var _nova_pending_field_attachments = require("./nova_pending_field_attachments");
var _olddesignation = require("./olddesignation");
var _password_resets = require("./password_resets");
var _personal_access_tokens = require("./personal_access_tokens");
var _project = require("./project");
var _projectemp = require("./projectemp");
var _projectframework_delete = require("./projectframework_delete");
var _projectmerge = require("./projectmerge");
var _projectmeta = require("./projectmeta");
var _projectmetadata = require("./projectmetadata");
var _projectprojecttype_delete = require("./projectprojecttype_delete");
var _projectservice_delete = require("./projectservice_delete");
var _projecttask = require("./projecttask");
var _projecttaskemp = require("./projecttaskemp");
var _projecttaskplan = require("./projecttaskplan");
var _projecttasktype = require("./projecttasktype");
var _projecttechnology = require("./projecttechnology");
var _projecttool_delete = require("./projecttool_delete");
var _projecttype_delete = require("./projecttype_delete");
var _question = require("./question");
var _questionanswer = require("./questionanswer");
var _questioncategory = require("./questioncategory");
var _questionform = require("./questionform");
var _resourcebookeddetails = require("./resourcebookeddetails");
var _resourcebooking = require("./resourcebooking");
var _service_delete = require("./service_delete");
var _sitesetting = require("./sitesetting");
var _subscription = require("./subscription");
var _subscriptionbillingdetails = require("./subscriptionbillingdetails");
var _subscriptioncredentials = require("./subscriptioncredentials");
var _subscriptionhistory = require("./subscriptionhistory");
var _subscriptionmaster = require("./subscriptionmaster");
var _subscriptionpaymentdetails = require("./subscriptionpaymentdetails");
var _tasktype = require("./tasktype");
var _teammembers = require("./teammembers");
var _teams = require("./teams");
var _techcategory = require("./techcategory");
var _technology_delete = require("./technology_delete");
var _ticketmeta = require("./ticketmeta");
var _timelog = require("./timelog");
var _tool-zdelete = require("./tool-delete");
var _user = require("./user");
var _user_2fa = require("./user_2fa");
var _useraddressbook = require("./useraddressbook");
var _userawards = require("./userawards");
var _usercertificates = require("./usercertificates");
var _usereducation = require("./usereducation");
var _userfcmtoken = require("./userfcmtoken");
var _userflexiblehour = require("./userflexiblehour");
var _usermetadata = require("./usermetadata");
var _usernotificationsettings = require("./usernotificationsettings");
var _userpermission = require("./userpermission");
var _userprofileupdatehistory = require("./userprofileupdatehistory");
var _userrole = require("./userrole");
var _usersignaturedata = require("./usersignaturedata");
var _verificationcodes = require("./verificationcodes");

function initModels(sequelize) {
  var bookeduser = _bookeduser(sequelize, DataTypes);
  var bugs = _bugs(sequelize, DataTypes);
  var bugsfiles = _bugsfiles(sequelize, DataTypes);
  var bugsnotes = _bugsnotes(sequelize, DataTypes);
  var bugstagmaster = _bugstagmaster(sequelize, DataTypes);
  var bugtags = _bugtags(sequelize, DataTypes);
  var buguser = _buguser(sequelize, DataTypes);
  var clickupaccesstokens = _clickupaccesstokens(sequelize, DataTypes);
  var clickupwebhooks = _clickupwebhooks(sequelize, DataTypes);
  var client = _client(sequelize, DataTypes);
  var clienthourlyrate = _clienthourlyrate(sequelize, DataTypes);
  var clientstagmaster = _clientstagmaster(sequelize, DataTypes);
  var clienttags = _clienttags(sequelize, DataTypes);
  var clientuserhours = _clientuserhours(sequelize, DataTypes);
  var compaintmeta = _compaintmeta(sequelize, DataTypes);
  var companydetails = _companydetails(sequelize, DataTypes);
  var complaint = _complaint(sequelize, DataTypes);
  var country = _country(sequelize, DataTypes);
  var currency = _currency(sequelize, DataTypes);
  var dailyworkplan = _dailyworkplan(sequelize, DataTypes);
  var department = _department(sequelize, DataTypes);
  var designation = _designation(sequelize, DataTypes);
  var documents = _documents(sequelize, DataTypes);
  var educationqualification = _educationqualification(sequelize, DataTypes);
  var emailtemplates = _emailtemplates(sequelize, DataTypes);
  var emergencycontact = _emergencycontact(sequelize, DataTypes);
  var empdepartment = _empdepartment(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);
  var employeecost = _employeecost(sequelize, DataTypes);
  var empreportingperson = _empreportingperson(sequelize, DataTypes);
  var errormessages = _errormessages(sequelize, DataTypes);
  var exitchecklistanswers = _exitchecklistanswers(sequelize, DataTypes);
  var exitchecklistparentsetps = _exitchecklistparentsetps(sequelize, DataTypes);
  var exitchecklistquestions = _exitchecklistquestions(sequelize, DataTypes);
  var exitchecklistresponses = _exitchecklistresponses(sequelize, DataTypes);
  var exitinterview = _exitinterview(sequelize, DataTypes);
  var exitinterviewanswers = _exitinterviewanswers(sequelize, DataTypes);
  var exitinterviewquestions = _exitinterviewquestions(sequelize, DataTypes);
  var exitinterviewresponse = _exitinterviewresponse(sequelize, DataTypes);
  var exitprocessnotifications = _exitprocessnotifications(sequelize, DataTypes);
  var failed_jobs = _failed_jobs(sequelize, DataTypes);
  var framework_delete = _framework_delete(sequelize, DataTypes);
  var general_signature_setting = _general_signature_setting(sequelize, DataTypes);
  var generalcompany = _generalcompany(sequelize, DataTypes);
  var grade = _grade(sequelize, DataTypes);
  var group = _group(sequelize, DataTypes);
  var holiday = _holiday(sequelize, DataTypes);
  var housekeeping_categories = _housekeeping_categories(sequelize, DataTypes);
  var housekeeping_items = _housekeeping_items(sequelize, DataTypes);
  var housekeeping_report = _housekeeping_report(sequelize, DataTypes);
  var industry = _industry(sequelize, DataTypes);
  var industry_delete = _industry_delete(sequelize, DataTypes);
  var jobapplicant = _jobapplicant(sequelize, DataTypes);
  var jobapplicantemphistory = _jobapplicantemphistory(sequelize, DataTypes);
  var jobapplicantreference = _jobapplicantreference(sequelize, DataTypes);
  var jobmeta = _jobmeta(sequelize, DataTypes);
  var jobopening = _jobopening(sequelize, DataTypes);
  var jobopeningmetadata = _jobopeningmetadata(sequelize, DataTypes);
  var jobs = _jobs(sequelize, DataTypes);
  var leave = _leave(sequelize, DataTypes);
  var leaveallocation = _leaveallocation(sequelize, DataTypes);
  var leavedetail = _leavedetail(sequelize, DataTypes);
  var leavedetails_leavetype = _leavedetails_leavetype(sequelize, DataTypes);
  var leavetype = _leavetype(sequelize, DataTypes);
  var mastertask = _mastertask(sequelize, DataTypes);
  var media = _media(sequelize, DataTypes);
  var migrations = _migrations(sequelize, DataTypes);
  var module = _module(sequelize, DataTypes);
  var monthlyaward = _monthlyaward(sequelize, DataTypes);
  var monthlyawardnomination = _monthlyawardnomination(sequelize, DataTypes);
  var nodemigration = _nodemigration(sequelize, DataTypes);
  var notifications = _notifications(sequelize, DataTypes);
  var notificationsetting = _notificationsetting(sequelize, DataTypes);
  var nova_field_attachments = _nova_field_attachments(sequelize, DataTypes);
  var nova_pending_field_attachments = _nova_pending_field_attachments(sequelize, DataTypes);
  var olddesignation = _olddesignation(sequelize, DataTypes);
  var password_resets = _password_resets(sequelize, DataTypes);
  var personal_access_tokens = _personal_access_tokens(sequelize, DataTypes);
  var project = _project(sequelize, DataTypes);
  var projectemp = _projectemp(sequelize, DataTypes);
  var projectframework_delete = _projectframework_delete(sequelize, DataTypes);
  var projectmerge = _projectmerge(sequelize, DataTypes);
  var projectmeta = _projectmeta(sequelize, DataTypes);
  var projectmetadata = _projectmetadata(sequelize, DataTypes);
  var projectprojecttype_delete = _projectprojecttype_delete(sequelize, DataTypes);
  var projectservice_delete = _projectservice_delete(sequelize, DataTypes);
  var projecttask = _projecttask(sequelize, DataTypes);
  var projecttaskemp = _projecttaskemp(sequelize, DataTypes);
  var projecttaskplan = _projecttaskplan(sequelize, DataTypes);
  var projecttasktype = _projecttasktype(sequelize, DataTypes);
  var projecttechnology = _projecttechnology(sequelize, DataTypes);
  var projecttool_delete = _projecttool_delete(sequelize, DataTypes);
  var projecttype_delete = _projecttype_delete(sequelize, DataTypes);
  var question = _question(sequelize, DataTypes);
  var questionanswer = _questionanswer(sequelize, DataTypes);
  var questioncategory = _questioncategory(sequelize, DataTypes);
  var questionform = _questionform(sequelize, DataTypes);
  var resourcebookeddetails = _resourcebookeddetails(sequelize, DataTypes);
  var resourcebooking = _resourcebooking(sequelize, DataTypes);
  var service_delete = _service_delete(sequelize, DataTypes);
  var sitesetting = _sitesetting(sequelize, DataTypes);
  var subscription = _subscription(sequelize, DataTypes);
  var subscriptionbillingdetails = _subscriptionbillingdetails(sequelize, DataTypes);
  var subscriptioncredentials = _subscriptioncredentials(sequelize, DataTypes);
  var subscriptionhistory = _subscriptionhistory(sequelize, DataTypes);
  var subscriptionmaster = _subscriptionmaster(sequelize, DataTypes);
  var subscriptionpaymentdetails = _subscriptionpaymentdetails(sequelize, DataTypes);
  var tasktype = _tasktype(sequelize, DataTypes);
  var teammembers = _teammembers(sequelize, DataTypes);
  var teams = _teams(sequelize, DataTypes);
  var techcategory = _techcategory(sequelize, DataTypes);
  var technology_delete = _technology_delete(sequelize, DataTypes);
  var ticketmeta = _ticketmeta(sequelize, DataTypes);
  var timelog = _timelog(sequelize, DataTypes);
  var tool-delete = _tool-delete(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_2fa = _user_2fa(sequelize, DataTypes);
  var useraddressbook = _useraddressbook(sequelize, DataTypes);
  var userawards = _userawards(sequelize, DataTypes);
  var usercertificates = _usercertificates(sequelize, DataTypes);
  var usereducation = _usereducation(sequelize, DataTypes);
  var userfcmtoken = _userfcmtoken(sequelize, DataTypes);
  var userflexiblehour = _userflexiblehour(sequelize, DataTypes);
  var usermetadata = _usermetadata(sequelize, DataTypes);
  var usernotificationsettings = _usernotificationsettings(sequelize, DataTypes);
  var userpermission = _userpermission(sequelize, DataTypes);
  var userprofileupdatehistory = _userprofileupdatehistory(sequelize, DataTypes);
  var userrole = _userrole(sequelize, DataTypes);
  var usersignaturedata = _usersignaturedata(sequelize, DataTypes);
  var verificationcodes = _verificationcodes(sequelize, DataTypes);


  return {
    bookeduser,
    bugs,
    bugsfiles,
    bugsnotes,
    bugstagmaster,
    bugtags,
    buguser,
    clickupaccesstokens,
    clickupwebhooks,
    client,
    clienthourlyrate,
    clientstagmaster,
    clienttags,
    clientuserhours,
    compaintmeta,
    companydetails,
    complaint,
    country,
    currency,
    dailyworkplan,
    department,
    designation,
    documents,
    educationqualification,
    emailtemplates,
    emergencycontact,
    empdepartment,
    employee,
    employeecost,
    empreportingperson,
    errormessages,
    exitchecklistanswers,
    exitchecklistparentsetps,
    exitchecklistquestions,
    exitchecklistresponses,
    exitinterview,
    exitinterviewanswers,
    exitinterviewquestions,
    exitinterviewresponse,
    exitprocessnotifications,
    failed_jobs,
    framework_delete,
    general_signature_setting,
    generalcompany,
    grade,
    group,
    holiday,
    housekeeping_categories,
    housekeeping_items,
    housekeeping_report,
    industry,
    industry_delete,
    jobapplicant,
    jobapplicantemphistory,
    jobapplicantreference,
    jobmeta,
    jobopening,
    jobopeningmetadata,
    jobs,
    leave,
    leaveallocation,
    leavedetail,
    leavedetails_leavetype,
    leavetype,
    mastertask,
    media,
    migrations,
    module,
    monthlyaward,
    monthlyawardnomination,
    nodemigration,
    notifications,
    notificationsetting,
    nova_field_attachments,
    nova_pending_field_attachments,
    olddesignation,
    password_resets,
    personal_access_tokens,
    project,
    projectemp,
    projectframework_delete,
    projectmerge,
    projectmeta,
    projectmetadata,
    projectprojecttype_delete,
    projectservice_delete,
    projecttask,
    projecttaskemp,
    projecttaskplan,
    projecttasktype,
    projecttechnology,
    projecttool_delete,
    projecttype_delete,
    question,
    questionanswer,
    questioncategory,
    questionform,
    resourcebookeddetails,
    resourcebooking,
    service_delete,
    sitesetting,
    subscription,
    subscriptionbillingdetails,
    subscriptioncredentials,
    subscriptionhistory,
    subscriptionmaster,
    subscriptionpaymentdetails,
    tasktype,
    teammembers,
    teams,
    techcategory,
    technology_delete,
    ticketmeta,
    timelog,
    tool-delete,
    user,
    user_2fa,
    useraddressbook,
    userawards,
    usercertificates,
    usereducation,
    userfcmtoken,
    userflexiblehour,
    usermetadata,
    usernotificationsettings,
    userpermission,
    userprofileupdatehistory,
    userrole,
    usersignaturedata,
    verificationcodes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
