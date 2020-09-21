# Test Driven Development - Calendar

**Prerequisite**: If you're new to test-driven development, make sure you read
the intro walkthrough first!

## Getting Started

This week, you will be creating an
[algorithm](https://en.wikipedia.org/wiki/Algorithm) to solve a hard problem -
scheduling meetings between multiple people.

To make this easier, you will be using test-driven-development to make sure
your algorithm handles the different cases correctly.

You can return to this walkthrough anytime by running this command:

```bash
teachme ~/step/walkthroughs/week-5-tdd/project/calendar-walkthrough.md
```

Click the **Start** button to begin!

## Scenario

Imagine you're working on the calendar team and are responsible for adding the
"find a meeting" feature. Using the existing API, you'll need to implement a
feature that given the meeting information, it will return the times when the
meeting could happen that day.

## Background

A meeting request has:

-   a name
-   a duration in minutes
-   a collection of attendees

For a particular time slot to work, all attendees must be free to attend the
meeting. When a query is made, it will be given a collection of all known
events. Each event has:

-   a name
-   a time range
-   a collection of attendees

A time range will give you the start time, the end time, and the duration of
the event. If you want to know more, open the
<walkthrough-editor-open-file
    filePath="step/walkthroughs/week-5-tdd/project/src/main/java/com/google/sps/TimeRange.java">
  TimeRange.java
</walkthrough-editor-open-file>
file.

## Objective

Your objective is to implement `query()` in the
<walkthrough-editor-open-file
    filePath="step/walkthroughs/week-5-tdd/project/src/main/java/com/google/sps/FindMeetingQuery.java">
  FindMeetingQuery.java
</walkthrough-editor-open-file>
file.

Your implementation must pass every test in `FindMeetingQueryTests.java` before
the feature will be considered complete. Keep in mind, if a test is failing, it
means that your code needs to change, not the test.

Ignore optional attendees for now.

To run the tests, `cd` into the `project` directory and then execute this
command:

```bash
mvn test
```

When all the tests pass, you can be confident that your code works!

## Writing more tests

To practice the principles of Test-Driven Development, it is now your turn to write some tests.

You are going to be adding some new functionality to your calendar, specifically, support for optional attendees for a meeting.

The basic functionality of optional attendees is that if one or more time slots exists so that both mandatory and optional attendees can attend, return those time slots. Otherwise, return the time slots that fit just the mandatory attendees.

Before implementing this feature, add some new tests to the <walkthrough-editor-open-file
    filePath="step/walkthroughs/week-5-tdd/project/src/test/java/com/google/sps/FindMeetingQueryTest.java">
  FindMeetingQueryTest.java
</walkthrough-editor-open-file>

file. Write one test for each of the following scenarios:

1. Based on `everyAttendeeIsConsidered`, add an optional attendee C who has an all-day event. The same three time slots should be returned as when C was not invited.
2. Also based on `everyAttendeeIsConsidered`, add an optional attendee C who has an event between 8:30 and 9:00. Now only the early and late parts of the day should be returned.
3. Based on `justEnoughRoom`, add an optional attendee B who has an event between 8:30 and 8:45. The optional attendee should be ignored since considering their schedule would result in a time slot smaller than the requested time.
4. No mandatory attendees, just two optional attendees with several gaps in their schedules. Those gaps should be identified and returned.
5. No mandatory attendees, just two optional attendees with no gaps in their schedules. `query` should return that the whole day is available since the optional attendees cannot be accommodated and the mandatory ones (all zero of them) are free all day.

Feel free to add additional tests for other scenarios that you think might be worth testing.

Then modify `query` to make those new tests (and the provided tests) pass.
