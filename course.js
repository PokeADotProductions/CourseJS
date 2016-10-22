"use strict";
var CourseJS = {};

/**
 * Class representing an entry.
 * @prop {String} alias A unique ID to reference this entry.
 * @prop {TimeSet} times A TimeSet listing the times during the week that this entry takes place.
 * @prop {Info} info An Info property that lists extra information about the particular entry.
 */
CourseJS.Entry = class Entry {
    /**
     * Create an entry.
     * @param {String} alias A unique ID to reference this entry.
     * @param {TimeSet} times A TimeSet listing the times during the week that this entry takes place.
     * @param {Info} info An Info property that lists extra information about the particular entry.
     */
    constructor (alias, times, info) {
        this.alias = alias;
        this.times = times;
        this.info = info;
    }

    /**
     * Gets the overlapping TimeSet between this entry and another entry.
     * @param {Entry} entry The entry to be compared against.
     * @return {TimeSet|undefined} A time set with the overlapping times between the two entries.
     */
    getOverlappingTimeSet (entry) {
        //TODO: Implement Function
    }

    /**
     * Gets information from this entry.
     * @return {Info} This entry's info property.
     */
    getInfo () {
        //TODO: Implement Function
    }
};

/**
 * Class representing a course.
 * @extends Info
 * @prop {String} alias A unique ID to reference this course.
 * @prop {TimeSet} times A TimeSet property listing the times during the week that this course takes place.
 * @prop {CourseInfo} info An Info property that lists extra information about the particular entry.
 */
CourseJS.Course = class Course extends CourseJS.Entry {
    /**
     * Create a course.
     * @param {String} alias A unique ID to reference this course.
     * @param {TimeSet} times A TimeSet property listing the times during the week that this course takes place.
     * @param {CourseInfo} info A CourseInfo property that lists information about this course.
     */
    constructor (alias, times, info) {
        super(alias, times, info);
    }

    /**
     * Gets course related information from this Entry.
     * @return {CourseInfo} This entry's courseInfo property.
     */
    getInfo () {
        //TODO: Implement Function
    }
};

/**
 * Class representing a group of entries.
 * @prop {Array<Entry>} entries List of entries currently in this entry group.
 * @prop {String} title Name of the entry group.
 * @prop {number} selected An index for the entries array pointing to the currently selected entry.
 * @prop {Array<number>} active An array of indexes for the entries array pointing to the currently active entries.
 */
CourseJS.EntryGroup = class EntryGroup {
    /**
     * Create an entry group.
     * @param {Array<Entry>} entries List of entries to be included in this entry group.
     * @param {String|undefined} title Name of the entry group.
     */
    constructor (entries, title) {
        this.entries = entries;
        this.title = title;
        this.selected = -1;
        this.active = [];
    }

    /**
     * Inserts an entry into this entry group.
     * @param {Entry} entry Entry to be inserted into this entry group.
     * @return {boolean} Value representing whether the entry was successfully able to be added.
     */
    insert (entry) {
        //TODO: Implement Function
    }

    /**
     * Sets an entry to be this entry group's selected entry.
     * @param {Entry|undefined} entry Entry to be selected by this entry group.
     * @return {boolean} Value representing whether the entry was successfully able to be selected.
     */
    select (entry) {
        //TODO: Implement Function
    }

    /**
     * Activates all matching entries in this entry group.
     * @param {Array<Entry>} entries Array of entries to be activated.
     */
    activate (entries) {
        //TODO: Implement Function
    }

    /**
     * Deactivates all matching entries in this entry group.
     * @param {Array<Entry>} entries Array of entries to be deactivated.
     */
    deactivate (entries) {
        //TODO: Implement Function
    }

    /**
     * Gets this entry group's selected entry.
     * @return {Entry|undefined} This entry group's selected entry.
     */
    getSelectedEntry () {
        //TODO: Implement Function
    }

    /**
     * Gets this entry group's activated entries.
     * @return {Array<Entry>|undefined} Array of activated entries in this entry group.
     */
    getActivatedEntries () {
        //TODO: Implement Function
    }

    /**
     * Gets the overlapping time sets between an entry and this entry group's active entries.
     * @param {Course} entry The entry to be compared against.
     * @return {Array<TimeSet>} An array of time sets overlapping between the two entries.
     */
    getOverlappingTimeSets (entry) {
        //TODO: Implement Function
    }

    /**
     * Checks if this entry group and another entry group's active entries are compatible with one another.
     * @param {EntryGroup} entryGroup The entry group to be compared against.
     * @return {boolean} Value representing whether the two entry groups are compatible.
     */
    isCompatibleWithEntryGroup (entryGroup) {
        //TODO: Implement Function
    }

    /**
     * Gets all of this entry group's selected entry's information.
     * @return {Info} This entry group's selected entry's Info property.
     */
    getInfo () {
        //TODO: Implement Function
    }
};

/**
 * Class representing a schedule.
 * @prop {String} owner The user who this schedule belongs to.
 * @prop {String} title The title that the user gives to the Schedule.
 * @prop {Array<Entry|EntryGroup>} items The items making up the schedule.
 */
CourseJS.Schedule = class Schedule {
    /**
     * Create a schedule.
     * @param {String} owner The owner of this schedule.
     * @param {String} title The title of this schedule.
     * @param {Array<Entry|EntryGroup>} items The items making up the schedule.
     */
    constructor (owner, title, items) {
        //TODO: Implement Constructor
    }

    /**
     * Checks if an item is compatible with this schedule.
     * If it's an entry group, checks if any of the active entries are compatible with the schedule.
     * @param {Entry|EntryGroup} item Item to be added to the schedule.
     * @return {boolean} Value representing whether the item is compatible with the schedule.
     */
    isCompatibleWithSchedule (item) {
        //TODO: Implement Function
    }

    /**
     * Inserts an item into this schedule.
     * @param {Entry|EntryGroup} item Item to be added to this schedule.
     * @return {boolean} Value representing whether the item was successfully added.
     */
    insert (item) {
        //TODO: Implement Function
    }

    /**
     * Gets all of this schedule's entries and entry groups.
     * @param {TimeSet|undefined} restriction Optional time set used to bound the search.
     * @return {Array<Entry|EntryGroup>} An array of items making up the schedule.
     */
    getItems (restriction) {
        //TODO: Implement Function
    }

    /**
     * Gets all of this schedule's entries and entry groups occuring on a certain day.
     * @param {Day} day Day used to search for entries.
     * @param {TimeSet|undefined} restriction Optional time set used to bound the search.
     * @return {Array<Entry|EntryGroup>} An array of items making up the schedule occuring on a certain day.
     */
    getItemsForDay (day, restriction) {
        //TODO: Implement Function
    }

    /**
     * Gets a time set containing all of the free time in this schedule
     * @param {TimeSet|undefined} restriction Optional time set used to bound the search.
     * @return {TimeSet} A time set making up all of the free time in the schedule.
     */
    getFreeTime (restriction) {
        //TODO: Implement Function
    }
};

/**
 * Class representing a time set.
 * @prop {Object} days An object whose properties are days and whose values are arrays of times starting on that day.
 */
CourseJS.TimeSet = class TimeSet {
    /**
     * Create a time set.
     * @param {Array<Time>|undefined} times An array of times comprising the time set.
     */
    constructor (times) {
        this.days = {Su: [], M: [], T: [], W: [], R: [], F: [], S: []};
        //TODO: Implement Constructor
        //If no params, TBA TimeSet
    }

    /**
     * Inserts a time into the time set.
     * Will split times crossing midnight into multiple separate times.
     * @param {Time} time Time to be added to this time set.
     * @return {boolean} Value representing whether the time was successfully added.
     */
    insert (time) {
        //TODO: Implement Function
    }

    /**
     * Gets all of this time set's times.
     * @param {TimeSet|undefined} restriction Optional time set used to bound the search.
     * @return {Array<Time>} An array of all of the times making up the time set.
     */
    getTimes (restriction) {
        //TODO: Implement Function
    }

    /**
     * Gets all of this time set's times.
     * @param {Day} day Day used to search for entries.
     * @param {TimeSet|undefined} restriction Optional time set used to bound the search.
     * @return {Array<Time>} An array of all of the times making up the time set on a certain day.
     */
    getTimesByDay (day, restriction) {
        //TODO: Implement Function
    }

    /**
     * Gets a TBA object
     */
    get TBA () {
        return TimeSet();
    }
};

/**
 * Class representing a time.
 * @prop {Moment} start The moment this time starts.
 * @prop {Moment} end The moment this time ends.
 */
CourseJS.Time = class Time {
    /**
     * Create a time.
     * @param {Moment} start The moment this time starts.
     * @param {Moment} end The moment this time ends.
     */
    constructor (start, end) {
        this.start = start;
        this.end = end;
    }

    /**
     * Gets this time's overlap with another time.
     * @param {Time} time The time to be compared against.
     * @return {Time} The time where the two times overlap.
     */
    getOverlap (time) {
        if (this.start < time.start && time.start < this.end) {
            if(time.end<this.end || time.end === this.end) {
                return (new Time(time.start, time.end)); 
            } else return (new Time(time.start, this.end));
        } else if (time.start < this.start && this.start < time.end) {
            if(this.end<time.end || this.end === time.end) {
                return (new Time(this.start, this.end));
            } else return(new Time(this.start, time.end))
        }
        return Time();
    }

    /**
     * Gets a TBA object
     */
    get TBA () {
        return TimeSet();
    }
};

/**
 * Class representing an entry's information.
 * @prop {InfoProp} searchable The searchable properties of this info.
 * @prop {InfoProp} regular The regular properties of this info.
 * @prop {InfoProp} hidden The hidden properties of this info.
 */
CourseJS.Info = class Info {
    /**
     * Create an info.
     * @param {InfoProp} searchable The searchable properties of this info.
     * @param {InfoProp} regular The regular properties of this info.
     * @param {InfoProp} hidden The hidden properties of this info.
     */
    constructor (searchable, regular, hidden) {
        this.searchable = searchable;
        this.regular = regular;
        this.hidden = hidden;
    }

    /**
     * Outputs this info as a string.
     * @return {String} A string representation of this info.
     */
    toString () {
        //TODO: Implement Function
    }
};

/**
 * Class representing a course's information.
 * @extends Info
 * @prop {InfoProp} searchable The searchable properties of this info.
 * @prop {InfoProp} regular The regular properties of this info.
 * @prop {InfoProp} hidden The hidden properties of this info.
 * @prop {String} number This course's number.
 * @prop {String} section This course's section.
 * @prop {String} subject This course's subject.
 */
CourseJS.CourseInfo = class CourseInfo extends CourseJS.Info {
    /**
     * Create a course info.
     * @param {InfoProp} searchable The searchable properties of this info.
     * @param {InfoProp} regular The regular properties of this info.
     * @param {InfoProp} hidden The hidden properties of this info.
     * @param {String} number This course's number.
     * @param {String} section This course's section.
     * @param {String} subject This course's subject.
     */
    constructor (searchable, regular, hidden, number, section, subject) {
        super(searchable, regular, hidden);
        this.number = number;
        this.section = section;
        this.subject = subject;
    }

    /**
     * Creates an info object without this course's course dependent properties.
     * @return {Info} An Info object without course dependent properties.
     */
    getNonCourseInfo () {
        return new CourseJS.Info(this.searchable, this.regular, this.hidden);
    }

    /**
     * Outputs this course info as a string.
     * @return {String} A string representation of this info.
     */
    toString () {
        //TODO: Implement Function
    }
};

/**
 * Class representing a course lookup.
 * @prop {Object} aliasMap A hashmap whose properties are aliases and whose values are their respective courses.
 * @prop {Object} dictionary A dictionary navigatable through the form: dictionary[{search term}][{search match}].
 */
CourseJS.CourseLookup = class CourseLookup {
    /**
     * Create a course lookup.
     */
    constructor () {
        this.aliasMap = {};
        this.dictionary = {};
    }

    /**
     * Inserts a course into this course lookup.
     * @param {Course} course Course to be added to this course lookup.
     * @return {boolean} Value representing whether the course was successfully added.
     */
    insert (course) {
        //TODO: Implement Function
    }

    /**
     * Gets a course from this course lookup using it's alias.
     * @param {String} alias Alias to use when searching for course.
     * @return {Course} The course associated with the given alias.
     */
    getCourseByAlias (alias) {
        //TODO: Implement Function
    }

    /**
     * Finds the other sections of a course and puts them into an entry group.
     * @param {Course} course Course to search for other sections of.
     * @return {EntryGroup} An entry group consisting of the given course and it's other sections.
     */
    findOtherSectionsOfCourse (course) {
        //TODO: Implement Function
    }

    /**
     * Finds all courses that match a given search query.
     * @param {SearchQuery} searchQuery A search query to be applied to the course lookup.
     * @return {Array<Course>} An array consisting of all the courses that match the given search query.
     */
    findMatchingCourses (searchQuery) {
        //TODO: Implement Function
    }
};

/**
 * Class representing a search query.
 * @prop {Object} data A dictionary whose properties are search terms and whose values are strings containing a search match.
 *                     Search Match can have tags and other delimiters to be formatted. (To Be Implemented Later)
 */
CourseJS.SearchQuery = class CourseInfo {
    /**
     * Create a search query.
     * @param {Object} data The Data to be used to build the search query.
     */
    constructor (data) {
        this.data = data;
        this.formatData();
    }

    /**
     * Interprets this search query's data and formats it.
     */
    formatData () {
        //TODO: Implement Function
    }
};

/**
 * A string representing a day of the week:
 * {Sunday: "Su", Monday: "M", Tuesday: "T", Wednesday: "W", Thursday: "R", Friday: "F", Saturday: "S"}.
 * @typedef {String} Day
 */

/**
 * An object representing a particular time.
 * @typedef {Object} Moment
 * @prop {Day} day The day this moment takes place on.
 * @prop {number} time The time this moment takes place; formatted in military time.
 */

/**
 * An object for use with info whose property:value pairs are the pieces of data.
 * Searchable info props will be added as "search term":"search match" pairs in a course lookup.
 * Regular info props have no special properties.
 * Hidden info props should not be displayed to the user and are solely used for record keeping.
 * @typedef {Object} InfoProp
 */

/**
 * Creates a course lookup from an array of functions.
 * @param {Array<Course>} courses The array of courses to use to build the course lookup.
 * @return {CourseLookup} The course lookup with all of the courses inserted.
 */
CourseJS.generateCourseLookup = function (courses) {
    //TODO: Implement Function
};

/**
 * Creates an array of possible schedules from an array of entries and entry groups.
 * @param {Array<Entry|EntryGroup>} entryArray The array of entries and entry groups for building the possible schedules.
 * @return {Array<Schedule>} The array of possible schedules from the given entries.
 */
CourseJS.generateScheduleListFromEntries = function (entryArray) {
    //TODO: Implement Function
};