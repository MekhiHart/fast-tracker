# Project Proposal

<aside>
📈 Stakeholders

</aside>

The BeachHacks team; specifically the logistics/operations team who want to analyze the data later, and for Committee Directors who want to have 100% confidence on their data to improve upon the next Hackathon

<aside>
🔑 Problems Being Solved

</aside>

- Registering hackathon attendees is through spreadsheet
- Registering event and workshop attendees is through spreadsheet
- Current Alerts-App program only tracks interest for workshops and event
    - Not responsible for registering attendees

<aside>
❓ Why is the use of spreadsheet problematic?

</aside>

- Problematic for the data during its generation phase of the data lifecycle when using spreadsheet due potential human errors

<aside>
⚙ Problems for data generation using spreadsheet

</aside>

1. Key Point:  Data generation is the responsibility for Attendees!; want to shift responsibility to BeachHacks volunteers using software
2. Attendees are:
    1. Tired from lack of sleep, and exhausted from coding
    2. Focus is towards the event they want to join, having them do a google form is repetitive annoying, and **TIME CONSUMING**
    

<aside>
⚠️ Main Concerns

</aside>

1. Data Integrity
    1. Attendees can input wrong data, making data inputted invalid
2. Ease of Accessibility for Attendees and BeachHacks volunteers
    1. Want to prioritize the experience for attendees. Removing the responsibility of data generation of them will allow attendees to focus on the events they want to attend
    2. BeachHacks volunteers are required to remain at the event to help attendees who are having problems
    3. Edge case of attendees not having devices that have the CPU to take google form quiz
    

<aside>
🔥 Problems solved by software

</aside>

- Avoid Data Integrity problems by shifting data generation responsibilities to software. Data generated during the event be used with a 100% confidence by:
    - Analysts during the analysis state of the data lifecycle
    - Committee Directors and project managers to plan next BeachHacks in 2024 during the interpretation state of the data lifecycle
- Improve BeachHacks experience for attendees with the lack of repetitive activities
- Make BeachHacks volunteers have a better experience through less repetitive jobs

<aside>
💡 Software Use Cases

</aside>

| Use Case 1  | Login to Account  |
| --- | --- |
| Actors | BeachHacks Attendee |
| Pre-Condition | Attendee must have been registered officially for BeachHacks by logistics/operations |
| Flow of Control | - User clicks on register button
—> System displays input fields 

- Fill out unique key given by BH 
- Click submit |
| Post-Conditions | System displays attendee profile |
| Error-Condition | Invalid Key inputted
Attendee is already logged in |
| Non-Functional Requirements | User interface must be user-friendly |

| Use Case 2 | Register attendee for event |
| --- | --- |
| Actors | BeachHacks Volunteer |
| Pre-Condition | Attendee has not registered for the event intended on attending |
| Flow of Control | - BH Volunteer scans QR code of attendee |
| Post-Conditions | System will update attendee’s status of being attended the event in the Database |
| Error-Condition | - QR code does not scan, volunteer registers attendee manually |
| Non-Functional Requirements | - Registration should be processed within 1-2 seconds   |

<aside>
🛠 Expanding the software

</aside>

- Adding event points to user profile to create incentives for attendees to attend planned BeachHacks events
    - Logistics/Operations will be involved to sell merch based on the the user’s event points

<aside>
💡 Additional Use Cases

</aside>

| Use Case 2 (MODIFIED) | Register attendee for event |
| --- | --- |
| Actors | BeachHacks Volunteer |
| Pre-Condition | Attendee has not registered for the event intended on attending |
| Flow of Control | - BH Volunteer scans QR code of attendee |
| Post-Conditions | - System will update attendee’s status of being attended the event in the Database
- System will update attendee’s event points (Registration also increases points)  |
| Error-Condition | - QR code does not scan, volunteer registers attendee manually |
| Non-Functional Requirements | - Registration should be processed within 1-2 seconds   |

| Use Case 3 | Purchase Merchandize |
| --- | --- |
| Actors | BeachHacks Volunteer & Attendee |
| Pre-Condition | BH attendee has enough points to purchase merch |
| Flow of Control | - BH attendee shows QR code to BeachHacks volunteer who scans QR code |
| Post-Conditions | - System shows displays validation that attendee can purchase merch
- System decreases user’s points in Database |
| Error-Condition | - QR code does not scan, volunteer  manually takes points off 
- Attendee does not have enough points,  |
| Non-Functional Requirements | - Purchase should be processed within 1-2 seconds   |

<aside>
🔑 Final Use Cases

</aside>

| Use Case 1  | Login to Account  |
| --- | --- |
| Actors | BeachHacks Attendee |
| Pre-Condition | Attendee must have been registered officially for BeachHacks by logistics/operations |
| Flow of Control | - User clicks on register button
—> System displays input fields 

- Fill out unique key given by BH 
- Click submit |
| Post-Conditions | System displays attendee profile |
| Error-Condition | Invalid Key inputted
Attendee is already logged in |
| Non-Functional Requirements | User interface must be user-friendly |

| Use Case 2 | Register attendee for event |
| --- | --- |
| Actors | BeachHacks Volunteer |
| Pre-Condition | Attendee has not registered for the event intended on attending |
| Flow of Control | - BH Volunteer scans QR code of attendee |
| Post-Conditions | - System will update attendee’s status of being attended the event in the Database
- System will update attendee’s event points (Registration also increases points)  |
| Error-Condition | - QR code does not scan, volunteer registers attendee manually |
| Non-Functional Requirements | - Registration should be processed within 1-2 seconds   |

| Use Case 3 | Purchase Merchandize |
| --- | --- |
| Actors | BeachHacks Volunteer & Attendee |
| Pre-Condition | BH attendee has enough points to purchase merch |
| Flow of Control | - BH attendee shows QR code to BeachHacks volunteer who scans QR code |
| Post-Conditions | - System shows displays validation that attendee can purchase merch
- System decreases user’s points in Database |
| Error-Condition | - QR code does not scan, volunteer  manually takes points off 
- Attendee does not have enough points,  |
| Non-Functional Requirements | - Purchase should be processed within 1-2 seconds   |