import { shuffle } from 'lodash';
import { Question } from './Question';

export default () => {
  const data: Question[] = [
    {
      id: 'glider_pilots_ground_school_1',
      question: 'With respect to the certification of airmen, which is a category of aircraft?',
      wrongAnswers: [
        'Gyroplane, helicopter, airship, free balloon.',
        'Single-engine land and sea, multiengine land and sea.',
      ],
      correctAnswer: 'Airplane, rotorcraft, glider, lighter-than-air.',
    },
    {
      id: 'glider_pilots_ground_school_2',
      question: 'With respect to the certification of airmen, which is a class of aircraft?',
      wrongAnswers: [
        'Airplane, rotorcraft, glider, lighter-than-air.',
        'Lighter-than-air, airship, hot air balloon, gas balloon.',
      ],
      correctAnswer: 'Single-engine land and sea, multiengine land and sea.',
    },
    {
      id: 'glider_pilots_ground_school_3',
      question: 'With respect to the certification of aircraft, which is a category of aircraft?',
      wrongAnswers: ['Airplane, rotorcraft, glider.', 'Landplane, seaplane.'],
      correctAnswer: 'Normal, utility, acrobatic.',
    },
    {
      id: 'glider_pilots_ground_school_4',
      question: 'With respect to the certification of aircraft, which is a class of aircraft?',
      wrongAnswers: ['Normal, utility, acrobatic, limited.', 'Transport, restricted, provisional.'],
      correctAnswer: 'Airplane, rotorcraft, glider, balloon.',
    },
    {
      id: 'glider_pilots_ground_school_5',
      question: 'The definition of nighttime is',
      wrongAnswers: ['sunset to sunrise.', '1 hour after sunset to 1 hour before sunrise.'],
      correctAnswer: 'the time between the end of evening civil twilight and the beginning of morning civil twilight.',
    },
    {
      id: 'glider_pilots_ground_school_6',
      question: 'Which V-speed represents maneuvering speed?',
      wrongAnswers: ['V(LO).', 'V(NE).'],
      correctAnswer: 'V(A).',
    },
    {
      id: 'glider_pilots_ground_school_7',
      question: 'Which V-speed represents maximum flap extended speed?',
      wrongAnswers: ['V(LOF).', 'V(FC).'],
      correctAnswer: 'V(FE).',
    },
    {
      id: 'glider_pilots_ground_school_8',
      question: 'Which V-speed represents maximum landing gear extended speed?',
      wrongAnswers: ['V(LO).', 'V(FE).'],
      correctAnswer: 'V(LE).',
    },
    {
      id: 'glider_pilots_ground_school_9',
      question: '(NO) is defined as the',
      wrongAnswers: ['normal operating range.', 'never-exceed speed.'],
      correctAnswer: 'maximum structural cruising speed.',
    },
    {
      id: 'glider_pilots_ground_school_10',
      question: '(SO) is defined as the',
      wrongAnswers: [
        'stalling speed or minimum steady flight speed in a specified configuration.',
        'stalling speed or minimum takeoff safety speed.',
      ],
      correctAnswer: 'stalling speed or minimum steady flight speed in the landing configuration.',
    },
    {
      id: 'glider_pilots_ground_school_11',
      question: "What should an owner or operator know about Airworthiness Directives (AD's)?",
      wrongAnswers: ['For Informational purposes only.', 'They are voluntary.'],
      correctAnswer: 'They are mandatory.',
    },
    {
      id: 'glider_pilots_ground_school_12',
      question: 'May a pilot operate an aircraft that is not in compliance with an Airworthiness Directive (AD)?',
      wrongAnswers: ['Yes, under VFR conditions only.', "Yes, AD's are only voluntary."],
      correctAnswer: 'Yes, if allowed by the AD.',
    },
    {
      id: 'glider_pilots_ground_school_13',
      question: 'Preventive maintenance has been performed on an aircraft. What paperwork is required?',
      wrongAnswers: [
        'A full, detailed description of the work done must be entered in the airframe logbook.',
        'The date the work was completed, and the name of the person who did the work must be entered in the airframe and engine logbook.',
      ],
      correctAnswer:
        'The signature, certificate number, and kind of certificate held by the person approving the work and a description of the work must be entered in the aircraft maintenance records.',
    },
    {
      id: 'glider_pilots_ground_school_14',
      question: 'What regulation allows a private pilot to perform preventive maintenance?',
      wrongAnswers: ['14 CFR Part 91.403.', '14 CFR Part 61.113.'],
      correctAnswer: '14 CFR Part 43.7.',
    },
    {
      id: 'glider_pilots_ground_school_15',
      question:
        'Who may perform preventive maintenance on an aircraft and approve it for return to service?\n1. Student or Recreational pilot.\n2. Private or Commercial pilot.\n3. None of the above.',
      wrongAnswers: ['1.', 'Neither 1 or 2.'],
      correctAnswer: '2.',
    },
    {
      id: 'glider_pilots_ground_school_16',
      question: 'Which operation would be described as preventive maintenance?',
      wrongAnswers: [
        'Repair of portions of skin sheets by making additional seams.',
        'Repair of landing gear brace struts.',
      ],
      correctAnswer: 'Replenishing hydraulic fluid.',
    },
    {
      id: 'glider_pilots_ground_school_17',
      question:
        'DUPLICATE - REMOVE AND INDICATE IN BOOK - Which operation would be described as preventive maintenance?',
      wrongAnswers: [
        'Repair of landing gear brace struts.',
        'Repair of portions of skin sheets by making additional seams.',
      ],
      correctAnswer: 'Replenishing hydraulic fluid.',
    },
    {
      id: 'glider_pilots_ground_school_18',
      question:
        'What documents must be in your personal possession or readily accessible in the aircraft while operating as pilot in command of an aircraft?',
      wrongAnswers: [
        'Certificates showing accomplishment of a checkout in the aircraft and a current biennial flight review.',
        'A pilot certificate with an endorsement showing accomplishment of an annual flight review and a pilot logbook showing recency of experience.',
      ],
      correctAnswer: 'An appropriate pilot certificate and an appropriate current medical certificate if required.',
    },
    {
      id: 'glider_pilots_ground_school_19',
      question:
        "When must a current pilot certificate be in the pilot's personal possession or readily accessible in the aircraft?",
      wrongAnswers: ['When acting as a crew chief during launch and recovery.', 'Only when passengers are carried.'],
      correctAnswer: 'Anytime when acting as pilot in command or as a required crew member.',
    },
    {
      id: 'glider_pilots_ground_school_20',
      question:
        'A recreational or private pilot acting as pilot in command, or in any other capacity as a required pilot flight crewmember, must have in their personal possession or readily accessible in the aircraft a current',
      wrongAnswers: [
        'logbook endorsement to show that a flight review has been satisfactorily accomplished.',
        'endorsement on the pilot certificate to show that a flight review has been satisfactorily accomplished.',
      ],
      correctAnswer: 'medical certificate if required and an appropriate pilot certificate.',
    },
    {
      id: 'glider_pilots_ground_school_21',
      question:
        'Each person who holds a pilot certificate or a medical certificate shall present it for inspection upon the request of the Administrator, the National Transportation Safety Board, or any',
      wrongAnswers: [
        'authorized representative of the Department of Transportation.',
        'person in a position of authority.',
      ],
      correctAnswer: 'federal, state, or local law enforcement officer.',
    },
    {
      id: 'glider_pilots_ground_school_22',
      question:
        'To act as pilot in command of an aircraft carrying passengers, a pilot must show by logbook endorsement the satisfactory completion of a flight review or completion of a pilot proficiency check within the preceding',
      wrongAnswers: ['6 calendar months.', '12 calendar months.'],
      correctAnswer: '24 calendar months.',
    },
    {
      id: 'glider_pilots_ground_school_23',
      question:
        'To act as pilot in command of an aircraft carrying passengers, the pilot must have made at least three takeoffs and three landings in an aircraft of the same category, class, and if a type rating is required, of the same type, within the preceding',
      wrongAnswers: ['12 calendar months.', '24 calendar months.'],
      correctAnswer: '90 days.',
    },
    {
      id: 'glider_pilots_ground_school_24',
      question:
        'To act as pilot in command of an aircraft carrying passengers, the pilot must have made three takeoffs and three landings within the preceding 90 days in an aircraft of the same',
      wrongAnswers: ['make and model.', 'category and class, but not type.'],
      correctAnswer: 'category, class, and type, if a type rating is required.',
    },
    {
      id: 'glider_pilots_ground_school_25',
      question:
        'If a certificated pilot changes permanent mailing address and fails to notify the FAA Airmen Certification Branch of the new address, the pilot is entitled to exercise the privileges of the pilot certificate for a period of only',
      wrongAnswers: ['60 days after the date of the move.', '90 days after the date of the move.'],
      correctAnswer: '30 days after the date of the move.',
    },
    {
      id: 'glider_pilots_ground_school_26',
      question:
        "A certificated private pilot may not act as pilot in command of an aircraft towing a glider unless there is entered in the pilot's logbook a minimum of",
      wrongAnswers: [
        '100 hours of pilot flight time in any aircraft that the pilot is using to tow a glider.',
        '200 hours of pilot-in-command time in the aircraft category, class, and type, if required, that the pilot is using to tow a glider.',
      ],
      correctAnswer:
        '100 hours of pilot-in-command time in the aircraft category, class, and type, if required, that the pilot is using to tow a glider.',
    },
    {
      id: 'glider_pilots_ground_school_27',
      question:
        'To act as pilot in command of an aircraft towing a glider, a pilot is required to have made within the preceding 24 months',
      wrongAnswers: [
        'at least three flights as observer in a glider being towed by an aircraft.',
        'at least three flights in a powered glider.',
      ],
      correctAnswer: 'at least three actual or simulated glider tows while accompanied by a qualified pilot.',
    },
    {
      id: 'glider_pilots_ground_school_28',
      question:
        'If a recreational or private pilot had a flight review on August 8, this year, when is the next flight review required?',
      wrongAnswers: ['August 8, 2 years later.', 'August 3, next year.'],
      correctAnswer: 'August 31, 2 years later.',
    },
    {
      id: 'glider_pilots_ground_school_29',
      question: 'Each recreational or private pilot is required to have',
      wrongAnswers: ['an annual flight review.', 'a semiannual flight review.'],
      correctAnswer: 'a biennial',
    },
    {
      id: 'glider_pilots_ground_school_30',
      question:
        'If a recreational or private pilot had a flight review on August 8, this year, when is the next flight review required?',
      wrongAnswers: ['August 8, next year.', 'August 31, 1 year later.'],
      correctAnswer: 'August 31, 2 years later.',
    },
    {
      id: 'glider_pilots_ground_school_31',
      question:
        'Prior to becoming certified as a private pilot with a glider rating, the pilot must have in his or her possession what type of medical?',
      wrongAnswers: ['A statement from a designated medical examiner.', 'A third-class medical certificate.'],
      correctAnswer: 'A medical certificate is not required.',
    },
    {
      id: 'glider_pilots_ground_school_32',
      question: 'In regard to privileges and limitations, a private pilot may',
      wrongAnswers: [
        'act as pilot in command of an aircraft carrying a passenger it compensation if the flight is in connection with a business or employment.',
        'not be paid in any manner for the operating expenses of a flight.',
      ],
      correctAnswer:
        'not pay less than the pro rata share of the operating expenses of a flight with passengers provided the expenses involve only fuel, oil, airport expenditures, or rental fees.',
    },
    {
      id: 'glider_pilots_ground_school_33',
      question: 'According to regulations pertaining to privileges and limitations, a private pilot may',
      wrongAnswers: [
        'be paid for the operating expenses of a flight if at least tree takeoffs and three landings were made by the pilot within the preceding 90 days.',
        'not be paid in any manner for the operating expenses of a flight.',
      ],
      correctAnswer:
        'not pay less than the pro rata share of the operating expenses of a flight with passengers provided the expenses involve only fuel, oil, airport expenditures, or rental fees.',
    },
    {
      id: 'glider_pilots_ground_school_34',
      question:
        'What exception, if any, permits a private pilot to act as pilot in command of an aircraft carrying passengers who pay for the flight?',
      wrongAnswers: ['If the passengers pay all the operating expenses.', 'There is no exception.'],
      correctAnswer: 'If a donation is made to a charitable organization for the flight.',
    },
    {
      id: 'glider_pilots_ground_school_35',
      question: 'The width of a Federal Airway from either side of the centerline is',
      wrongAnswers: ['6 nautical miles.', '8 nautical miles.'],
      correctAnswer: '4 nautical miles.',
    },
    {
      id: 'glider_pilots_ground_school_36',
      question: 'Unless otherwise specified, Federal Airways include that Class E airspace extending upward from',
      wrongAnswers: [
        '700 feet above the surface up to and including 17,999 feet MSL.',
        'the surface up to and including 18,000 feet MSL.',
      ],
      correctAnswer: '1.200 feet above the surface up to and including 17,999 feet MSL.',
    },
    {
      id: 'glider_pilots_ground_school_37',
      question:
        'Normal VFR operations in Class D airspace with an operating control tower require the ceiling and visibility to be at least',
      wrongAnswers: ['1,000 feet and 1 mile.', '2,500 feet and 3 miles.'],
      correctAnswer: '1,000 feet and 3 miles.',
    },
    {
      id: 'glider_pilots_ground_school_38',
      question: 'The final authority as to the operation of an aircraft is the',
      wrongAnswers: ['Federal Aviation Administration.', 'aircraft manufacturer.'],
      correctAnswer: 'pilot in command.',
    },
    {
      id: 'glider_pilots_ground_school_39',
      question: 'The person directly responsible for the pre-launch briefing of passengers for a flight is the',
      wrongAnswers: ['safety officer.', 'ground crew member.'],
      correctAnswer: 'pilot in command.',
    },
    {
      id: 'glider_pilots_ground_school_40',
      question: 'If an inflight emergency requires immediate action, the pilot in command may',
      wrongAnswers: [
        "deviate from the FAR's to the extent required to meet the emergency, but must submit a written report to the Administrator within 24 hours.",
        "not deviate from the FAR's unless prior to the deviation approval is granted by the Administrator.",
      ],
      correctAnswer: "deviate from the FAR's to the extent required to meet that emergency.",
    },
    {
      id: 'glider_pilots_ground_school_41',
      question:
        'When must a pilot who deviates from a regulation during an emergency send a written report of that deviation to the Administrator?',
      wrongAnswers: ['Within 7 days.', 'Within 10 days.'],
      correctAnswer: 'Upon request.',
    },
    {
      id: 'glider_pilots_ground_school_42',
      question: 'Who is responsible for determining if an aircraft is in condition for safe flight?',
      wrongAnswers: ['A certificated aircraft mechanic.', 'The owner or operator.'],
      correctAnswer: 'The pilot in command.',
    },
    {
      id: 'glider_pilots_ground_school_43',
      question: "Where may an aircraft's operating limitations be found?",
      wrongAnswers: ['On the Airworthiness Certificate.', 'In the aircraft airframe and engine logbooks.'],
      correctAnswer:
        'In the current, FAA-approved flight manual, approved manual material, markings, and placards, or any combination thereof.',
    },
    {
      id: 'glider_pilots_ground_school_44',
      question: 'Under what conditions may objects be dropped from an aircraft?',
      wrongAnswers: [
        'Only in an emergency.',
        'If prior permission is received from the Federal Aviation Administration.',
      ],
      correctAnswer: 'If precautions are taken to avoid injury or damage to persons or property on the surface.',
    },
    {
      id: 'glider_pilots_ground_school_45',
      question:
        'A person may not act as a crew member of a civil aircraft if alcoholic beverages have been consumed by that person within the preceding',
      wrongAnswers: ['12 hours.', '24 hours.'],
      correctAnswer: '8 hours.',
    },
    {
      id: 'glider_pilots_ground_school_46',
      question:
        'Under what condition, if any, may a pilot allow a person who is obviously under the influence of drugs to be carried aboard an aircraft?',
      wrongAnswers: [
        "Only if the person does not have access to the cockpit or pilot's compartment.",
        'Under no condition.',
      ],
      correctAnswer: 'In an emergency or if the person is a medical patient under proper care.',
    },
    {
      id: 'glider_pilots_ground_school_47',
      question: 'No person may attempt to act as a crew member of a civil aircraft with',
      wrongAnswers: [
        '.008 percent by weight or more alcohol in the blood.',
        '.004 percent by weight or more alcohol in the blood.',
      ],
      correctAnswer: '.04 percent by weight or more alcohol in the blood.',
    },
    {
      id: 'glider_pilots_ground_school_48',
      question: 'Which preflight action is specifically required of the pilot prior to each flight?',
      wrongAnswers: [
        'Check the aircraft logbooks for appropriate entries.',
        'Review wake turbulence avoidance procedures.',
      ],
      correctAnswer: 'Become familiar with all available information concerning the flight.',
    },
    {
      id: 'glider_pilots_ground_school_49',
      question: 'Preflight action, as required for all flights away from the vicinity of an airport, shall include',
      wrongAnswers: [
        'the designation of an alternate airport.',
        'a study of arrival procedures at airports/ heliports of intended use.',
      ],
      correctAnswer: 'an alternate course of action if the flight cannot be completed as planned.',
    },
    {
      id: 'glider_pilots_ground_school_50',
      question:
        'In addition to other preflight actions for a VFR flight away from the vicinity of the departure airport, regulations specifically require the pilot in command to',
      wrongAnswers: [
        'review traffic control light signal procedures.',
        'check the accuracy of the navigation equipment and the emergency locator transmitter (ELT).',
      ],
      correctAnswer:
        "determine runway lengths at airports of intended use and the aircraft's takeoff and landing distance data.",
    },
    {
      id: 'glider_pilots_ground_school_51',
      question: 'Flight crew members are required to keep their safety belts and shoulder harnesses fastened during',
      wrongAnswers: ['all flight conditions.', 'flight in turbulent air.'],
      correctAnswer: 'takeoffs and landings.',
    },
    {
      id: 'glider_pilots_ground_school_52',
      question:
        'Which best describes the flight conditions under which flight crew members are specifically required to keep their safety belts and shoulder harnesses fastened?',
      wrongAnswers: [
        'Safety belts during takeoff and landing; shoulder harnesses during takeoff and landing.',
        'Safety belts during takeoff and landing; shoulder harnesses during takeoff and landing and while en route.',
      ],
      correctAnswer:
        'Safety belts during takeoff and landing and while en route; shoulder harnesses during takeoff and landing.',
    },
    {
      id: 'glider_pilots_ground_school_53',
      question:
        'With respect to passengers, what obligation, if any, does a pilot in command have concerning the use of safety belts?',
      wrongAnswers: [
        'The pilot in command must instruct the passengers to keep their safety belts fastened for the entire flight.',
        "The pilot in command has no obligation in regard to passengers' use of safety belts.",
      ],
      correctAnswer:
        'The pilot in command must brief the passengers on the use of safety belts and notify them to fasten their safety belts during taxi, takeoff, and landing.',
    },
    {
      id: 'glider_pilots_ground_school_54',
      question: 'With certain exceptions, safety belts are required to be secured about passengers during',
      wrongAnswers: ['all flight conditions.', 'flight in turbulent air.'],
      correctAnswer: 'taxi, takeoffs, and landings.',
    },
    {
      id: 'glider_pilots_ground_school_55',
      question: 'Safety belts are required to be properly secured about which persons in an aircraft and when?',
      wrongAnswers: [
        'Pilots only, during takeoffs and landings.',
        'Each person on board the aircraft during the entire flight.',
      ],
      correctAnswer: 'Passengers, during taxi, takeoffs, and landings only.',
    },
    {
      id: 'glider_pilots_ground_school_56',
      question: 'No person may operate an aircraft in formation flight',
      wrongAnswers: ['over a densely populated area.', 'in Class D airspace under special VFR.'],
      correctAnswer: 'except by prior arrangement with the pilot in command of each aircraft.',
    },
    {
      id: 'glider_pilots_ground_school_57',
      question: 'Which aircraft has the right-of-way over all other air traffic?',
      wrongAnswers: ['A balloon.', 'An aircraft on final approach to land.'],
      correctAnswer: 'An aircraft in distress.',
    },
    {
      id: 'glider_pilots_ground_school_58',
      question: 'What action is required when two aircraft of the same category converge, but not head-on?',
      wrongAnswers: ['The faster aircraft shall give way.', 'Each aircraft shall give way to the right.'],
      correctAnswer: 'The aircraft on the left shall give way.',
    },
    {
      id: 'glider_pilots_ground_school_59',
      question: 'Which aircraft has the right-of-way over the other aircraft listed?',
      wrongAnswers: ['Gyroplane.', 'Airship.'],
      correctAnswer: 'Aircraft towing other aircraft.',
    },
    {
      id: 'glider_pilots_ground_school_60',
      question: 'Which aircraft has the right-of-way over the other aircraft listed?',
      wrongAnswers: ['Airship.', 'Aircraft refueling other aircraft.'],
      correctAnswer: 'Glider.',
    },
    {
      id: 'glider_pilots_ground_school_61',
      question: 'What action should the pilots of a glider and an airplane take if on a head-on collision course?',
      wrongAnswers: [
        'The airplane pilot should give way to the left.',
        'The glider pilot should give way to the right.',
      ],
      correctAnswer: 'Both pilots should give way to the right.',
    },
    {
      id: 'glider_pilots_ground_school_62',
      question:
        'When two or more aircraft are approaching an airport for the purpose of landing, the right-of-way belongs tolls aircraft',
      wrongAnswers: ['that has the other to its right.', 'that is the least maneuverable.'],
      correctAnswer:
        'at the lower altitude, but it shall not take advantaged this rule to cut in front of or to overtake another.',
    },
    {
      id: 'glider_pilots_ground_school_63',
      question:
        'Except when necessary for takeoff or landing, what is the minimum safe altitude for a pilot to operate an aircraft anywhere?',
      wrongAnswers: [
        'An altitude of 500 feet above the surface and no closer than 500 feet to any person, vessel, vehicle, or structure.',
        'An altitude of 500 feet above the highest obstacle within a horizontal radius of 1,000 feet.',
      ],
      correctAnswer:
        'An altitude allowing, if a power unit fails, an emergency landing without undue hazard to persons or property on the surface.',
    },
    {
      id: 'glider_pilots_ground_school_64',
      question:
        'Except when necessary for takeoff or landing, what is the minimum safe altitude required for a pilot to operate an aircraft over congested areas?',
      wrongAnswers: [
        'An altitude of 1,000 feet above any person, vessel, vehicle, or structure.',
        'An altitude of 500 feet above the highest obstacle within a horizontal radius of 1,000 feet of the aircraft.',
      ],
      correctAnswer:
        'An altitude of 1,000 feet above the highest obstacle within a horizontal radius of 2,000 feet of the aircraft.',
    },
    {
      id: 'glider_pilots_ground_school_65',
      question:
        'Except when necessary for takeoff or landing, what is the minimum safe altitude required for a pilot to operate an aircraft over other than a congested area?',
      wrongAnswers: [
        'An altitude allowing, if a power unit fails, an emergency landing without undue hazard to persons or property on the surface.',
        'An altitude of 500 feet above the highest obstacle within a horizontal radius of 1,000 feet.',
      ],
      correctAnswer:
        'An altitude of 500 feet AGL, except over open water or a sparsely populated area, which requires 500 feet from any person, vessel, vehicle, or structure.',
    },
    {
      id: 'glider_pilots_ground_school_66',
      question:
        'Except when necessary for takeoff or landing, an  aircraft may not be operated closer than what distance from any person, vessel, vehicle, or structure?',
      wrongAnswers: ['700 feet.', '1,000 feet.'],
      correctAnswer: '500 feet.',
    },
    {
      id: 'glider_pilots_ground_school_67',
      question:
        'If an altimeter setting is not available before flight, to which altitude should the pilot adjust the altimeter?',
      wrongAnswers: [
        'The elevation of the nearest airport corrected to mean sea level.',
        'Pressure altitude corrected for nonstandard temperature.',
      ],
      correctAnswer: 'The elevation of the departure area.',
    },
    {
      id: 'glider_pilots_ground_school_68',
      question: 'Prior to takeoff, the altimeter should be set to which altitude or altimeter setting?',
      wrongAnswers: [
        'The corrected density altitude of the departure airport.',
        'The corrected pressure altitude for the departure airport.',
      ],
      correctAnswer: 'The current local altimeter setting, if available, or the departure airport elevation.',
    },
    {
      id: 'glider_pilots_ground_school_69',
      question: 'At what altitude shall the altimeter be set to 29.92, when climbing to cruising flight level?',
      wrongAnswers: ['14,500 feet MSL.', '24,000 feet MSL.'],
      correctAnswer: '18,000 feet MSL.',
    },
    {
      id: 'glider_pilots_ground_school_70',
      question:
        'When an ATC clearance has been obtained, no pilot in command may deviate from that clearance, unless that pilot obtains an amended clearance. The one exception to this regulation is',
      wrongAnswers: ['when the clearance states "at pilot\'s discretion."', 'if the clearance contains a restriction.'],
      correctAnswer: 'an emergency.',
    },
    {
      id: 'glider_pilots_ground_school_71',
      question:
        'When would a pilot be required to submit a detailed report of an emergency which caused the pilot to deviate from an ATC clearance?',
      wrongAnswers: ['Immediately.', 'Within 7 days.'],
      correctAnswer: 'When requested by ATC.',
    },
    {
      id: 'glider_pilots_ground_school_72',
      question:
        'What action, if any, is appropriate if the pilot deviates from an ATC instruction during an emergency and is given priority?',
      wrongAnswers: [
        'Take no special action since you are pilot in command.',
        'File a report to the FAA Administrator, as soon as possible.',
      ],
      correctAnswer:
        'File a detailed report within 48 hours to the chief of the appropriate ATC facility, if requested.',
    },
    {
      id: 'glider_pilots_ground_school_73',
      question:
        'A steady green light signal directed from the control tower to an aircraft in flight is a signal that the pilot',
      wrongAnswers: ['should give way to other aircraft and continue circling.', 'should return for landing.'],
      correctAnswer: 'is cleared to land.',
    },
    {
      id: 'glider_pilots_ground_school_74',
      question:
        'An alternating red and green light signal directed from the control tower to an aircraft in flight is a signal to',
      wrongAnswers: ['hold position.', 'not land; the airport is unsafe.'],
      correctAnswer: 'exercise extreme caution.',
    },
    {
      id: 'glider_pilots_ground_school_75',
      question: 'A blue segmented circle on a Sectional Chart depicts which class airspace?',
      wrongAnswers: ['Class B.', 'Class C.'],
      correctAnswer: 'Class D.',
    },
    {
      id: 'glider_pilots_ground_school_76',
      question: 'Airspace at an airport with a part-time control tower is classified as Class D airspace only',
      wrongAnswers: [
        'when the weather minimums are below basic VFR.',
        'when the associated Flight Service Station is in operation.',
      ],
      correctAnswer: 'when the associated control tower is in operation.',
    },
    {
      id: 'glider_pilots_ground_school_77',
      question:
        'Unless otherwise authorized, two-way radio communications with Air Traffic Control are required for landings or takeoffs',
      wrongAnswers: [
        'at all tower controlled airports only when weather conditions are less than VFR.',
        'at all tower controlled airports within Class D airspace only when weather conditions are less than VFR.',
      ],
      correctAnswer: 'at all tower controlled airports regardless of weather conditions.',
    },
    {
      id: 'glider_pilots_ground_school_78',
      question:
        'Two-way radio communication must be established with the Air Traffic Control facility having jurisdiction over the area prior to entering which class airspace?',
      wrongAnswers: ['Class E.', 'Class G.'],
      correctAnswer: 'Class C.',
    },
    {
      id: 'glider_pilots_ground_school_79',
      question: 'What minimum radio equipment is required for operation within Class C airspace?',
      wrongAnswers: [
        'Two-way radio communications equipment and a 4096-code transponder.',
        'Two-way radio communications equipment, a 4096-code transponder, and DME.',
      ],
      correctAnswer: 'Two-way radio communications equipment, a 4096-code transponder, and an encoding altimeter.',
    },
    {
      id: 'glider_pilots_ground_school_80',
      question: 'What minimum pilot certification is required for operation within Class B airspace?',
      wrongAnswers: ['Commercial Pilot Certificate.', 'Private Pilot Certificate with an instrument rating.'],
      correctAnswer: 'Private Pilot Certificate or Student Pilot Certificate with appropriate logbook endorsements.',
    },
    {
      id: 'glider_pilots_ground_school_81',
      question: 'What minimum pilot certification is required for operation within Class B airspace?',
      wrongAnswers: ['Recreational Pilot Certificate.', 'Private Pilot Certificate with an instrument rating.'],
      correctAnswer: 'Private Pilot Certificate or Student Pilot Certificate with appropriate logbook endorsements.',
    },
    {
      id: 'glider_pilots_ground_school_82',
      question: 'What minimum radio equipment is required for VFR operation within Class B airspace?',
      wrongAnswers: [
        'Two-way radio communications equipment and a 4096-code transponder.',
        'Two-way radio communications equipment, a 4096-code transponder, an encoding altimeter, and a VOR or TACAN receiver.',
      ],
      correctAnswer: 'Two-way radio communications equipment, a 4096-code transponder, and an encoding altimeter.',
    },
    {
      id: 'glider_pilots_ground_school_83',
      question: 'An operable 4096-code transponder and Mode C encoding altimeter are required in',
      wrongAnswers: ['Class D airspace.', 'Class E airspace below 10,000 feet MSL.'],
      correctAnswer: 'Class B airspace and within 30 miles of the Class B primary airport.',
    },
    {
      id: 'glider_pilots_ground_school_84',
      question: 'In which type of airspace are VFR flights prohibited?',
      wrongAnswers: ['Class B.', 'Class C.'],
      correctAnswer: 'Class A.',
    },
    {
      id: 'glider_pilots_ground_school_85',
      question:
        'During operations within controlled airspace at altitudes of less than 1,200 feet AGL, the minimum horizontal distance from clouds requirement for VFR flight is',
      wrongAnswers: ['1.000 feet.', '1,500 feet.'],
      correctAnswer: '2.000 feet.',
    },
    {
      id: 'glider_pilots_ground_school_86',
      question:
        'What minimum visibility and clearance from clouds are required for VFR operations in Class G airspace at 700 feet AGL or below during daylight hours?',
      wrongAnswers: [
        '1 mile visibility, 500 feet below, 1,000 feet above, and 2.000 feet horizontal clearance from clouds.',
        '3 miles visibility and clear of clouds.',
      ],
      correctAnswer: '1 mile visibility and clear of clouds.',
    },
    {
      id: 'glider_pilots_ground_school_87',
      question:
        'What minimum flight visibility is required for VFR flight operations on an airway below 10,000 feet MSL?',
      wrongAnswers: ['1 mile.', '4 miles.'],
      correctAnswer: '3 miles.',
    },
    {
      id: 'glider_pilots_ground_school_88',
      question: 'The minimum distance from clouds required for VFR operations on an airway below 10,000 feet MSL is',
      wrongAnswers: ['remain clear of clouds.', '500 feet above, 1,000 feet below, and 2,000 feet horizontally.'],
      correctAnswer: '500 feet below, 1,000 feet above, and 2,000 feet horizontally.',
    },
    {
      id: 'glider_pilots_ground_school_89',
      question:
        'During operations within controlled airspace at altitudes of more than 1,200 feet AGL, but less than 10,000 feet MSL, the minimum distance above clouds requirement for VFR flight is',
      wrongAnswers: ['500 feet.', '1,500 feet.'],
      correctAnswer: '1,000 feet.',
    },
    {
      id: 'glider_pilots_ground_school_90',
      question:
        'VFR flight in controlled airspace above 1,200 feet AGL and below 10,000 feet MSL requires a minimum visibility and vertical cloud clearance of',
      wrongAnswers: [
        '5 miles, and 1,000 feet below or 1,000 feet above the clouds at all altitudes.',
        '5 miles, and 1,000 feet below or 1,000 feet above the clouds only in Class A airspace.',
      ],
      correctAnswer: '3 miles, and 500 feet below or 1,000 feet above the clouds in controlled airspace.',
    },
    {
      id: 'glider_pilots_ground_school_91',
      question:
        'Outside controlled airspace, the minimum flight visibility requirement for VFR flight above 1.200 feet AGL and below 10,000 feet MSL during daylight hours is',
      wrongAnswers: ['3 miles.', '5 miles.'],
      correctAnswer: '1 mile.',
    },
    {
      id: 'glider_pilots_ground_school_92',
      question:
        'The minimum flight visibility required for VFR flights above 10,000 feet MSL and more than 1,200 feet AGL in controlled airspace is',
      wrongAnswers: ['1 mile.', '3 miles.'],
      correctAnswer: '5 miles.',
    },
    {
      id: 'glider_pilots_ground_school_93',
      question:
        'For VFR flight operations above 10,000 feet MSL. and more than 1,200 feet AGL, the minimum horizontal distance from clouds required is',
      wrongAnswers: ['1,000 feet.', '2,000 feet.'],
      correctAnswer: '1 mile.',
    },
    {
      id: 'glider_pilots_ground_school_94',
      question:
        'During operations at altitudes of more than 1,200 feet AGL and at or above 10,000 feet MSL, the minimum distance above clouds requirement for VFR flight is',
      wrongAnswers: ['500 feet.', '1,500 feet.'],
      correctAnswer: '1,000 feet.',
    },
    {
      id: 'glider_pilots_ground_school_95',
      question:
        'No person may take off or land an aircraft under best VFR at an airport that lies within Class D airspace unless the',
      wrongAnswers: [
        'flight visibility at that airport is at least 1 mile.',
        'ground visibility at that airport is at least 1 mile.',
      ],
      correctAnswer: 'ground visibility at that airport is at least 3 miles.',
    },
    {
      id: 'glider_pilots_ground_school_96',
      question: 'The basic VFR weather minimums for operating an aircraft within Class D airspace are',
      wrongAnswers: ['500-foot ceiling and 1 mile visibility.', 'clear of clouds and 2 miles visibility.'],
      correctAnswer: '1,000-foot ceiling and 3 miles visibility.',
    },
    {
      id: 'glider_pilots_ground_school_97',
      question:
        'In addition to a valid Airworthiness Certificate, what documents or records must be aboard an aircraft during flight?',
      wrongAnswers: [
        "Aircraft engine and airframe logbooks, and owner's manual.",
        "Radio operator's permit, and repair and alteration forms.",
      ],
      correctAnswer: 'Operating limitations and Registration Certificate.',
    },
    {
      id: 'glider_pilots_ground_school_98',
      question: 'Except in Alaska, during what time period should lighted position lights be displayed on an aircraft?',
      wrongAnswers: [
        'End of evening civil twilight to the beginning of morning civil twilight.',
        '1 hour after sunset to 1 hour before sunrise.',
      ],
      correctAnswer: 'Sunset to sunrise.',
    },
    {
      id: 'glider_pilots_ground_school_99',
      question:
        'When operating an aircraft at cabin pressure altitudes above 12,500 feet MSL up to and including 14,000 feet MSL, supplemental oxygen shall be used during',
      wrongAnswers: [
        'the entire flight time at those altitudes.',
        'that flight time in excess of 10 minutes at those altitudes.',
      ],
      correctAnswer: 'that flight time in excess of 30 minutes at those altitudes.',
    },
    {
      id: 'glider_pilots_ground_school_100',
      question:
        'Unless each occupant is provided with supplemental oxygen, no person may operate a civil aircraft of U.S. registry above a maximum cabin pressure altitude of',
      wrongAnswers: ['12,500 feet MSL.', '14,000 feet MSL.'],
      correctAnswer: '15,000 feet MSL.',
    },
    {
      id: 'glider_pilots_ground_school_101',
      question: 'An operable 4096-code transponder with an encoding altimeter is required in which airspace?',
      wrongAnswers: ['Class D and Class E (below 10,000 feet MSL).', 'Class D and Class G (below 10,000 feet MSL).'],
      correctAnswer: 'Class A, Class B (and within 30 miles of the Class B primary airport), and Class C.',
    },
    {
      id: 'glider_pilots_ground_school_107',
      question:
        'An approved chair-type parachute may be carried in an aircraft for emergency use if it has been packed by an appropriately rated parachute rigger within the preceding',
      wrongAnswers: ['120 days.', '365 days.'],
      correctAnswer: '180 days.',
    },
    {
      id: 'glider_pilots_ground_school_108',
      question: 'With certain exceptions, when must each occupant of an aircraft wear an approved parachute?',
      wrongAnswers: [
        'When a door is removed from the aircraft to facilitate parachute jumpers.',
        'When intentionally banking in excess of 30°.',
      ],
      correctAnswer: 'When intentionally pitching the nose of the aircraft up or down 30° or more.',
    },
    {
      id: 'glider_pilots_ground_school_109',
      question:
        'The minimum allowable strength of a towline used for an aerotow of a glider having a certificated gross weight of 700 pounds is',
      wrongAnswers: ['700 pounds.', '1,000 pounds.'],
      correctAnswer: '560 pounds.',
    },
    {
      id: 'glider_pilots_ground_school_110',
      question:
        'The minimum allowable strength of a towline used for an aerotow of a glider having a certificated gross weight of 1,040 pounds is',
      wrongAnswers: ['502 pounds.', '1,040 pounds.'],
      correctAnswer: '832 pounds.',
    },
    {
      id: 'glider_pilots_ground_school_111',
      question:
        'For the aerotow of a glider that weighs 700 pounds, which towrope tensile strength would require the use of safety links at each end of the rope?',
      wrongAnswers: ['850 pounds.', '1,040 pounds.'],
      correctAnswer: '1,450 pounds.',
    },
    {
      id: 'glider_pilots_ground_school_112',
      question:
        'When using a towline having a breaking strength more than twice the maximum certificated operating weight of the glider, an approved safety link must be installed at what point(s)?',
      wrongAnswers: [
        'Only the point where the towline is attached to the glider.',
        'Only the point where the towline is attached to the towplane.',
      ],
      correctAnswer:
        'The point where the towline is attached to the glider and the point of attachment of the towline to the towplane.',
    },
    {
      id: 'glider_pilots_ground_school_113',
      question: 'Which is normally prohibited when operating a restricted category civil aircraft?',
      wrongAnswers: ['Flight under instrument flight rules.', 'Flight within Class D airspace.'],
      correctAnswer: 'Flight over a densely populated area.',
    },
    {
      id: 'glider_pilots_ground_school_114',
      question:
        'Unless otherwise specifically authorized, no person may operate an aircraft that has an experimental certificate',
      wrongAnswers: ['beneath the floor of Class B airspace.', 'from the primary airport within Class D airspace.'],
      correctAnswer: 'over a densely populated area or in a congested airway.',
    },
    {
      id: 'glider_pilots_ground_school_115',
      question:
        'The responsibility for ensuring that an aircraft is maintained in an airworthy condition is primarily that of the',
      wrongAnswers: ['pilot in command.', 'mechanic who performs the work.'],
      correctAnswer: 'owner or operator.',
    },
    {
      id: 'glider_pilots_ground_school_116',
      question: 'The airworthiness of an aircraft can be determined by a preflight inspection and a',
      wrongAnswers: [
        'statement from the owner or operator that the aircraft is airworthy.',
        'log book endorsement from a flight instructor.',
      ],
      correctAnswer: 'review of the maintenance records.',
    },
    {
      id: 'glider_pilots_ground_school_117',
      question:
        'The responsibility for ensuring that maintenance personnel make the appropriate entries in the aircraft maintenance records indicating the aircraft has been approved for return to service lies with the',
      wrongAnswers: ['pilot in command.', 'mechanic who performed the work.'],
      correctAnswer: 'owner or operator.',
    },
    {
      id: 'glider_pilots_ground_school_118',
      question:
        'Who is responsible for ensuring appropriate entries are made in maintenance records indicating the aircraft has been approved for return to service?',
      wrongAnswers: ['Certified mechanic.', 'Repair station.'],
      correctAnswer: 'Owner or operator.',
    },
    {
      id: 'glider_pilots_ground_school_119',
      question: "Who is responsible for ensuring Airworthiness Directives (AD's) are complied with?",
      wrongAnswers: ['Repair station.', 'Mechanic with inspection authorization (IA).'],
      correctAnswer: 'Owner or operator.',
    },
    {
      id: 'glider_pilots_ground_school_120',
      question:
        'Completion of an annual inspection and the return of the aircraft to service should always be indicated by',
      wrongAnswers: [
        'the relicensing date on the Registration Certificate.',
        'an inspection sticker placed on the instrument panel that lists the annual inspection completion date.',
      ],
      correctAnswer: 'an appropriate notation in the aircraft maintenance records.',
    },
    {
      id: 'glider_pilots_ground_school_121',
      question:
        "If an alteration or repair substantially affects an aircraft's operation in flight, that aircraft must be test flown by an appropriately-rated pilot and approved for return to service prior to being operated",
      wrongAnswers: ['by any private pilot.', 'for compensation or hire.'],
      correctAnswer: 'with passengers aboard.',
    },
    {
      id: 'glider_pilots_ground_school_122',
      question:
        'Before passengers can be carried in an aircraft that has been altered in a manner that may have appreciably changed its flight characteristics, it must be flight tested by an appropriately-rated pilot who holds at least a',
      wrongAnswers: [
        'Commercial Pilot Certificate with an instrument rating.',
        "Commercial Pilot Certificate and a mechanic's certificate.",
      ],
      correctAnswer: 'Private Pilot Certificate.',
    },
    {
      id: 'glider_pilots_ground_school_123',
      question:
        "An aircraft's annual inspection was performed on July 12, this year. The next annual inspection will be due no later than",
      wrongAnswers: ['July 1, next year.', 'July 13, next year.'],
      correctAnswer: 'July 31, next year.',
    },
    {
      id: 'glider_pilots_ground_school_124',
      question: 'To determine the expiration date of the last annual aircraft inspection, a person should refer to the',
      wrongAnswers: ['Airworthiness Certificate.', 'Registration Certificate.'],
      correctAnswer: 'aircraft maintenance records.',
    },
    {
      id: 'glider_pilots_ground_school_125',
      question: 'How long does the Airworthiness Certificate of an aircraft remain valid?',
      wrongAnswers: [
        'As long as the aircraft has a current Registration Certificate.',
        'Indefinitely, unless the aircraft suffers major damage.',
      ],
      correctAnswer: 'As long as the aircraft is maintained and operated as required by Federal Aviation Regulations.',
    },
    {
      id: 'glider_pilots_ground_school_126',
      question: 'What aircraft inspections are required for rental aircraft that are also used for flight instruction?',
      wrongAnswers: ['Biannual and 100-hour inspections.', 'Annual and 50-hour inspections.'],
      correctAnswer: 'Annual and 100-hour inspections.',
    },
    {
      id: 'glider_pilots_ground_school_127',
      question:
        'Which records or documents shall the owner or operator of an aircraft keep to show compliance with an applicable Airworthiness Directive?',
      wrongAnswers: [
        "Airworthiness Certificate and Pilot's Operating Handbook.",
        'Airworthiness and Registration Certificates.',
      ],
      correctAnswer: 'Aircraft maintenance records.',
    },
    {
      id: 'glider_pilots_ground_school_128',
      question:
        'If an aircraft is involved in an accident which results in substantial damage to the aircraft, the nearest NTSB field office should be notified',
      wrongAnswers: ['within 48 hours.', 'within 7 days.'],
      correctAnswer: 'immediately.',
    },
    {
      id: 'glider_pilots_ground_school_129',
      question: 'Which incident requires an immediate notification to the nearest NTSB field office?',
      wrongAnswers: ['A forced landing due to engine failure.', 'Landing gear damage, due to a hard landing.'],
      correctAnswer: 'Flight control system malfunction or failure.',
    },
    {
      id: 'glider_pilots_ground_school_130',
      question: 'Which incident would necessitate an immediate notification to the nearest NTSB field office?',
      wrongAnswers: ['An in-flight generator/alternator failure.', 'An in-flight loss of VOR receiver capability.'],
      correctAnswer: 'An in-flight fire.',
    },
    {
      id: 'glider_pilots_ground_school_131',
      question: 'Which incident requires an immediate notifications made to the nearest NTSB field office?',
      wrongAnswers: ['An in-flight radio communications failure.', 'An in-flight generator or alternator failure.'],
      correctAnswer: 'An overdue aircraft that is believed to be involved in an accident.',
    },
    {
      id: 'glider_pilots_ground_school_132',
      question: 'May aircraft wreckage be moved prior to the time the NTSB takes custody?',
      wrongAnswers: [
        'Yes, but only if moved by a federal, state, or local a enforcement officer.',
        'No, it may not be moved under any circumstances.',
      ],
      correctAnswer: 'Yes, but only to protect the wreckage from further damage.',
    },
    {
      id: 'glider_pilots_ground_school_133',
      question:
        'The operator of an aircraft that has been involved in an accident is required to file an accident report within how many days?',
      wrongAnswers: ['5', '7'],
      correctAnswer: '10',
    },
    {
      id: 'glider_pilots_ground_school_134',
      question:
        'The operator of an aircraft that has been involved in an incident is required to submit a report to the nearest field office of the NTSB',
      wrongAnswers: ['within 7 days.', 'within 10 days.'],
      correctAnswer: 'when requested.',
    },
    {
      id: 'glider_pilots_ground_school_135',
      figures: ['sport_rec_private_akts_figure_1.png'],
      question: 'The acute angle A is the angle of',
      wrongAnswers: ['incidence.', 'dihedral.'],
      correctAnswer: 'attack.',
    },
    {
      id: 'glider_pilots_ground_school_136',
      question: 'The term "angle of attack" is defined as the angle',
      wrongAnswers: [
        "between the airplane's climb angle and the horizon.",
        'formed by the longitudinal axis of the airplane and the chord line of the wing.',
      ],
      correctAnswer: 'between the wing chord line and the relative wind.',
    },
    {
      id: 'glider_pilots_ground_school_137',
      question: 'How will frost on the wings of an airplane affect takeoff performance?',
      wrongAnswers: [
        'Frost will change the camber of the wing, increasing is lifting capability.',
        'Frost will cause the airplane to become airborne with higher angle of attack, decreasing the stall speed.',
      ],
      correctAnswer:
        'Frost will disrupt the smooth flow of air over the wing, adversely affecting its lifting capability.',
    },
    {
      id: 'glider_pilots_ground_school_138',
      question: 'An airplane said to be inherently stable will',
      wrongAnswers: ['be difficult to stall.', 'not spin.'],
      correctAnswer: 'require less effort to control.',
    },
    {
      id: 'glider_pilots_ground_school_139',
      question: 'What determines the longitudinal stability of an airplane?',
      wrongAnswers: [
        'The effectiveness of the horizontal stabilizer, rudder, and rudder trim tab.',
        'The relationship of thrust and lift to weight and drag.',
      ],
      correctAnswer: 'The location of the CG with respect to the center of lit.',
    },
    {
      id: 'glider_pilots_ground_school_140',
      question: 'What is the purpose of the rudder on an airplane?',
      wrongAnswers: ['To control overbanking tendency.', 'To control roll.'],
      correctAnswer: 'To control yaw.',
    },
    {
      id: 'glider_pilots_ground_school_141',
      question: 'One of the main functions of flaps during approach and landing is to',
      wrongAnswers: [
        'decrease the angle of descent without increasing the airspeed.',
        'permit a touchdown at a higher indicated airspeed.',
      ],
      correctAnswer: 'increase the angle of descent without increasing the airspeed.',
    },
    {
      id: 'glider_pilots_ground_school_142',
      question: 'What is one purpose of wing flaps?',
      wrongAnswers: [
        'To relieve the pilot of maintaining continuous pressure on the controls.',
        'To decrease wing area to vary the lift.',
      ],
      correctAnswer: 'To enable the pilot to make steeper approaches to a landing without increasing the airspeed.',
    },
    {
      id: 'glider_pilots_ground_school_143',
      question: 'If the pitot tube and outside static vents become clogged, which instruments would be affected?',
      wrongAnswers: [
        'The altimeter, airspeed indicator, and turn-and-slip indicator.',
        'The altimeter, attitude indicator, and turn-and-slip indicator.',
      ],
      correctAnswer: 'The altimeter, airspeed indicator, and vertical speed indicator.',
    },
    {
      id: 'glider_pilots_ground_school_144',
      question: 'Which instrument will become inoperative if the pitot tube becomes clogged?',
      wrongAnswers: ['Altimeter.', 'Vertical speed.'],
      correctAnswer: 'Airspeed.',
    },
    {
      id: 'glider_pilots_ground_school_145',
      question: 'Which instruments) will become inoperative if the static vents become clogged?',
      wrongAnswers: ['Airspeed only.', 'Altimeter only.'],
      correctAnswer: 'Airspeed, altimeter, and vertical speed.',
    },
    {
      id: 'glider_pilots_ground_school_150',
      question:
        'Altimeter setting is the value to which the barometric pressure scale of the altimeter is set so the altimeter indicates',
      wrongAnswers: ['calibrated altitude at field elevation.', 'absolute altitude at field elevation.'],
      correctAnswer: 'true altitude at field elevation.',
    },
    {
      id: 'glider_pilots_ground_school_151',
      question: 'How do variations in temperature affect the altimeter?',
      wrongAnswers: [
        'Higher temperatures expand the pressure levels and the indicated altitude is higher than true altitude.',
        'Lower temperatures lower the pressure levels and the indicated altitude is lower than true altitude.',
      ],
      correctAnswer: 'Pressure levels are raised on warm days and the indicated altitude is lower than true altitude.',
    },
    {
      id: 'glider_pilots_ground_school_152',
      question: 'What is true altitude?',
      wrongAnswers: [
        'The vertical distance of the aircraft above the surface.',
        'The height above the standard datum plane.',
      ],
      correctAnswer: 'The vertical distance of the aircraft above sea level.',
    },
    {
      id: 'glider_pilots_ground_school_153',
      question: 'What is absolute altitude?',
      wrongAnswers: ['The altitude read directly from the altimeter.', 'The height above the standard datum plane.'],
      correctAnswer: 'The vertical distance of the aircraft above the surface.',
    },
    {
      id: 'glider_pilots_ground_school_154',
      question: 'What is density altitude?',
      wrongAnswers: ['The height above the standard datum plane.', 'The altitude read directly from the altimeter.'],
      correctAnswer: 'The pressure altitude corrected for nonstandard temperature.',
    },
    {
      id: 'glider_pilots_ground_school_155',
      question: 'What is pressure altitude?',
      wrongAnswers: [
        'The indicated altitude corrected for position and installation error.',
        'The indicated altitude corrected for nonstandard temperature and pressure.',
      ],
      correctAnswer: 'The altitude indicated when the barometric pressure scale is set to 29.92.',
    },
    {
      id: 'glider_pilots_ground_school_156',
      question: 'Under what condition is indicated altitude the same as true altitude?',
      wrongAnswers: [
        'If the altimeter has no mechanical error.',
        'When at 18,000 feet MSL with the altimeter set at 29.92.',
      ],
      correctAnswer: 'When at sea level under standard conditions.',
    },
    {
      id: 'glider_pilots_ground_school_157',
      question: 'If it is necessary to set the altimeter from 29.15 to 29.85, what change occurs?',
      wrongAnswers: ['70-foot increase in indicated altitude.', '70-foot increase in density altitude.'],
      correctAnswer: '700-foot increase in indicated altitude.',
    },
    {
      id: 'glider_pilots_ground_school_158',
      question: 'The pitot system provides impact pressure for which instrument?',
      wrongAnswers: ['Altimeter.', 'Vertical-speed indicator.'],
      correctAnswer: 'Airspeed indicator.',
    },
    {
      id: 'glider_pilots_ground_school_159',
      question:
        'As altitude increases, the indicated airspeed at which a given airplane stalls in a particular configuration will',
      wrongAnswers: ['decrease as the true airspeed decreases.', 'decrease as the true airspeed increases.'],
      correctAnswer: 'remain the same regardless of altitude.',
    },
    {
      id: 'glider_pilots_ground_school_160',
      question: 'What does the red line on an airspeed indicator represent?',
      wrongAnswers: ['Maneuvering speed.', 'Turbulent or rough-air speed.'],
      correctAnswer: 'Never-exceed speed.',
    },
    {
      id: 'glider_pilots_ground_school_161',
      question: 'Which color identifies the never-exceed speed?',
      wrongAnswers: ['Lower limit of the yellow arc.', 'Upper limit of the white arc.'],
      correctAnswer: 'The red radial line',
    },
    {
      id: 'glider_pilots_ground_school_162',
      question: 'What is an important airspeed limitation that is not color coded on airspeed indicators?',
      wrongAnswers: ['Never-exceed speed.', 'Maximum structural cruising speed.'],
      correctAnswer: 'Maneuvering speed.',
    },
    {
      id: 'glider_pilots_ground_school_163',
      question: 'Deviation in a magnetic compass is caused by the',
      wrongAnswers: [
        'presence of flaws in the permanent magnets of the compass.',
        'difference in the location between true north and magnetic north.',
      ],
      correctAnswer: 'magnetic fields within the aircraft distorting the lines of magnetic force.',
      hint: 'See: https://www.cfinotebook.net/notebook/avionics-and-instruments/magnetic-compass#magnetic-dip and https://www.youtube.com/watch?v=fxveRt_1ThM',
    },
    {
      id: 'glider_pilots_ground_school_164',
      question:
        'In the Northern Hemisphere, a magnetic compass will normally indicate initially a turn toward the West if',
      wrongAnswers: [
        'a left turn is entered from a north heading.',
        'an aircraft is accelerated while on a north heading.',
      ],
      correctAnswer: 'a right turn is entered from a north heading.',
      hint: 'See: https://www.cfinotebook.net/notebook/avionics-and-instruments/magnetic-compass#magnetic-dip and https://www.youtube.com/watch?v=GxnvoRG6MDg',
    },
    {
      id: 'glider_pilots_ground_school_165',
      question:
        'In the Northern Hemisphere, a magnetic compass will normally indicate initially a turn toward the East if',
      wrongAnswers: [
        'an aircraft is decelerated while on a south heading.',
        'an aircraft is accelerated while on a north heading.',
      ],
      correctAnswer: 'a left turn is entered from a north heading.',
      hint: 'See: https://www.cfinotebook.net/notebook/avionics-and-instruments/magnetic-compass#magnetic-dip and https://www.youtube.com/watch?v=GxnvoRG6MDg',
    },
    {
      id: 'glider_pilots_ground_school_166',
      question: 'In the Northern Hemisphere, a magnetic compass will normally indicate a turn toward the north if',
      wrongAnswers: [
        'an aircraft is decelerated while on an East or West heading.',
        'a left turn is entered from a West heading.',
      ],
      correctAnswer: 'an aircraft is accelerated while on an East or West heading.',
      hint: 'See: https://www.cfinotebook.net/notebook/avionics-and-instruments/magnetic-compass#magnetic-dip and https://www.youtube.com/watch?v=UvhooB--P2s',
    },
    {
      id: 'glider_pilots_ground_school_167',
      question: 'In the Northern Hemisphere, the magnetic compass will normally indicate a turn toward the south when',
      wrongAnswers: ['a left turn is entered from an East heading.', 'a right turn is entered from a West heading.'],
      correctAnswer: 'the aircraft is decelerated while on a West heading.',
      hint: 'See: https://www.cfinotebook.net/notebook/avionics-and-instruments/magnetic-compass#magnetic-dip and https://www.youtube.com/watch?v=UvhooB--P2s',
    },
    {
      id: 'glider_pilots_ground_school_168',
      question:
        'In the Northern Hemisphere, if an aircraft is accelerated or decelerated, the magnetic compass will normally indicate',
      wrongAnswers: ['a turn momentarily.', 'a turn toward the South.'],
      correctAnswer: 'correctly when on a North or South heading.',
      hint: 'See: https://www.cfinotebook.net/notebook/avionics-and-instruments/magnetic-compass#magnetic-dip and https://www.youtube.com/watch?v=UvhooB--P2s',
    },
    {
      id: 'glider_pilots_ground_school_169',
      question:
        'In the Northern Hemisphere, if a glider is accelerated or decelerated, the magnetic compass will normally indicate',
      wrongAnswers: [
        'a turn toward North while decelerating on an East heading.',
        'a turn toward South while accelerating on a West heading.',
      ],
      correctAnswer: 'correctly only when on a North or South heading.',
      hint: 'See: https://www.cfinotebook.net/notebook/avionics-and-instruments/magnetic-compass#magnetic-dip and https://www.youtube.com/watch?v=UvhooB--P2s',
    },
    {
      id: 'glider_pilots_ground_school_170',
      question: 'During flight, when are the indications of a magnetic compass accurate?',
      wrongAnswers: ['As long as the airspeed is constant.', 'During turns if the bank does not exceed 18°.'],
      correctAnswer: 'Only in straight-and-level unaccelerated flight.',
      hint: 'See: https://www.cfinotebook.net/notebook/avionics-and-instruments/magnetic-compass#magnetic-dip and https://www.youtube.com/watch?v=UvhooB--P2s',
    },
    {
      id: 'glider_pilots_ground_school_171',
      question:
        'An airplane has been loaded in such a manner that the CG is located aft of the aft CG limit. One undesirable flight characteristic a pilot might experience with this airplane would be',
      wrongAnswers: ['a longer takeoff run.', 'stalling at higher-than-normal airspeed.'],
      correctAnswer: 'difficulty in recovering from a stalled condition.',
    },
    {
      id: 'glider_pilots_ground_school_172',
      question: 'Loading an airplane to the most aft CG will cause the airplane to be',
      wrongAnswers: [
        'less stable at slow speeds, but more stable at high speeds.',
        'less stable at high speeds, but more stable at low speeds',
      ],
      correctAnswer: 'less stable at all speeds.',
    },
    {
      id: 'glider_pilots_ground_school_173',
      question:
        'If the outside air temperature (OAT) at a given altitude is warmer than standard, the density altitude is',
      wrongAnswers: ['equal to pressure altitude.', 'lower than pressure altitude.'],
      correctAnswer: 'higher than pressure altitude.',
    },
    {
      id: 'glider_pilots_ground_school_174',
      question: 'What force makes an airplane turn?',
      wrongAnswers: ['The vertical component of lift.', 'Centrifugal force.'],
      correctAnswer: 'The horizontal component of lift.',
    },
    {
      id: 'glider_pilots_ground_school_175',
      question: 'In what fight condition must an aircraft be placed in order to spin?',
      wrongAnswers: ['Partially stalled with one wing low.', 'In a steep diving spiral.'],
      correctAnswer: 'Stalled.',
    },
    {
      id: 'glider_pilots_ground_school_176',
      question: 'During a spin to the left, which wing(s) is/are stalled',
      wrongAnswers: ['Neither wing is stalled.', 'Only the left wing is stalled.'],
      correctAnswer: 'Both wings are stalled.',
    },
    {
      id: 'glider_pilots_ground_school_177',
      question: 'The angle of attack at which an airplane wing stalls will',
      wrongAnswers: ['increase if the CG is moved forward.', 'change with an increase in gross weight.'],
      correctAnswer: 'remain the same regardless of gross weight.',
    },
    {
      id: 'glider_pilots_ground_school_178',
      question: 'What is ground effect?',
      wrongAnswers: [
        'The result of an alteration in airflow patterns increasing induced drag about the wings of an airplane.',
        'The result of the disruption of the airflow patterns above the wings of an airplane to the point where the wings will no longer support the airplane in flight.',
      ],
      correctAnswer:
        'The result of the interference of the surface of the Earth with the airflow patterns about an airplane.',
    },
    {
      id: 'glider_pilots_ground_school_179',
      question:
        'Floating caused by the phenomenon of ground effect will be most realized during an approach to land when at',
      wrongAnswers: ['twice the length of the wingspan above the surface.', 'a higher-than-normal angle of attack.'],
      correctAnswer: 'less than the length of the wingspan above the surface.',
    },
    {
      id: 'glider_pilots_ground_school_180',
      question: 'What must a pilot be aware of as a result of ground effect?',
      wrongAnswers: [
        'Wingtip vortices increase creating wake turbulence problems for arriving and departing aircraft.',
        'À full stall landing will require less up elevator deflection than would a full stall when done free of ground effect.',
      ],
      correctAnswer:
        'Induced drag decreases; therefore, any excess speed at the point of flare may cause considerable floating.',
    },
    {
      id: 'glider_pilots_ground_school_181',
      question: 'Ground effect is most likely to result in which problem?',
      wrongAnswers: [
        'Settling to the surface abruptly during landing.',
        'Inability to get airborne even though airspeed is sufficient for normal takeoff needs.',
      ],
      correctAnswer: 'Becoming airborne before reaching recommended takeoff speed.',
    },
    {
      id: 'glider_pilots_ground_school_182',
      question: 'During an approach to a stall, an increased load factor will cause the airplane to',
      wrongAnswers: ['have a tendency to spin.', 'be more difficult to control.'],
      correctAnswer: 'stall at a higher airspeed.',
    },
    {
      id: 'glider_pilots_ground_school_183',
      question: 'Angle of attack is defined as the angle between the chord line of an airfoil and the',
      wrongAnswers: ['pitch angle of an airfoil', 'rotor plane of rotation.'],
      correctAnswer: 'direction of the relative wind.',
    },
    {
      id: 'glider_pilots_ground_school_184',
      question: 'What force provides the forward motion necessary to move a glider through the air?',
      wrongAnswers: ['Lift.', 'Centripetal force.'],
      correctAnswer: 'Gravity.',
    },
    {
      id: 'glider_pilots_ground_school_185',
      question: 'To obtain maximum distance over the ground, the airspeed to use is the',
      wrongAnswers: ['minimum control speed.', 'minimum sink speed.'],
      correctAnswer: 'best lift/drag speed.',
    },
    {
      id: 'glider_pilots_ground_school_186',
      question: 'What effect would gusts and turbulence have on the load factor of a glider with changes in airspeed?',
      wrongAnswers: ['Load factor decreases as airspeed increases.', 'Load factor increases as airspeed decreases.'],
      correctAnswer: 'Load factor increases as airspeed increases.',
    },
    {
      id: 'glider_pilots_ground_school_187',
      figures: ['sport_rec_private_akts_figure_11.png'],
      question: 'Which yaw string and inclinometer illustrations indicate a slipping right turn?',
      wrongAnswers: ['3 and 6.', '2 and 4.'],
      correctAnswer: '2 and 6.',
    },
    {
      id: 'glider_pilots_ground_school_188',
      figures: ['sport_rec_private_akts_figure_11.png'],
      question:
        'Which of the illustrations depicts the excessive use of right rudder during the entry of a right turn?',
      wrongAnswers: ['2 only.', '2 and 4.'],
      correctAnswer: '3 and 4.',
    },
    {
      id: 'glider_pilots_ground_school_189',
      question: 'A sailplane has a best glide ratio of 23:1. How many feet will the glider lose in 8 nautical miles?',
      wrongAnswers: ['1,840 feet.', '2,750 feet.'],
      correctAnswer: '2,100 feet.',
    },
    {
      id: 'glider_pilots_ground_school_190',
      question:
        'A sailplane has a best glide ratio of 30:1. How many nautical milea will the glider travel while losing 2,000 feet?',
      wrongAnswers: ['15 nautical miles.', '21 nautical miles.'],
      correctAnswer: '10 nautical miles.',
    },
    {
      id: 'glider_pilots_ground_school_191',
      question:
        'A sailplane has lost 2,000 feet in 9 nautical miles. The best glide ratio for this sailplane is approximately',
      wrongAnswers: ['24:01', '30:01'],
      correctAnswer: '27:01',
    },
    {
      id: 'glider_pilots_ground_school_192',
      question: 'How many feet will a sailplane sink in 15 nautical miles if its lift/drag ratio is 22:1',
      wrongAnswers: ['2,700 feet.', '3,600 feet.'],
      correctAnswer: '4,100 feet.',
    },
    {
      id: 'glider_pilots_ground_school_193',
      question: 'How many feet will a glider sink in 10 nautical miles if its lift/drag ratio is 23:1?',
      wrongAnswers: ['2,400 feet.', '4,300 feet.'],
      correctAnswer: '2,600 feet.',
    },
    {
      id: 'glider_pilots_ground_school_194',
      question:
        'What is the proper airspeed to use when flying between thermals on a cross-country flight against a headwind?',
      wrongAnswers: [
        'The minimum sink speed increased by one-half the estimated wind velocity.',
        'The best lift/drag speed decreased by one-half the estimated wind velocity.',
      ],
      correctAnswer: 'The best lift/drag speed increased by one-half the estimated wind velocity.',
    },
    {
      id: 'glider_pilots_ground_school_195',
      question: 'Every physical process of weather is accompanied by, or is the result of, a',
      wrongAnswers: ['movement of air.', 'pressure differential.'],
      correctAnswer: 'heat exchange.',
    },
    {
      id: 'glider_pilots_ground_school_196',
      question: 'What causes variations in altimeter settings between weather reporting points?',
      wrongAnswers: ['Variation of terrain elevation.', 'Coriolis force.'],
      correctAnswer: "Unequal heating of the Earth's surface.",
    },
    {
      id: 'glider_pilots_ground_school_197',
      question: 'A temperature inversion would most likely result in which weather condition?',
      wrongAnswers: [
        'Clouds with extensive vertical development above an inversion aloft.',
        'Good visibility in the lower levels of the atmosphere and poor visibility above an inversion aloft.',
      ],
      correctAnswer: 'An increase in temperature as altitude is increased.',
    },
    {
      id: 'glider_pilots_ground_school_198',
      question: 'The most frequent type of ground or surface-based temperature inversion is that which is produced by',
      wrongAnswers: [
        'warm air being lifted rapidly aloft in the vicinity of mountainous terrain.',
        'the movement of colder air under warm air, or the movement of warm air over cold air.',
      ],
      correctAnswer: 'terrestrial radiation on a clear, relatively still night.',
    },
    {
      id: 'glider_pilots_ground_school_199',
      question:
        'Which weather conditions should be expected beneath a low-level temperature inversion layer when the relative humidity is high?',
      wrongAnswers: [
        'Light wind shear, poor visibility, haze, and light rain.',
        'Turbulent air, poor visibility, fog, low stratus type clouds, and showery precipitation.',
      ],
      correctAnswer: 'Smooth air, poor visibility, fog, haze, or low clouds.',
    },
    {
      id: 'glider_pilots_ground_school_200',
      question: 'What are the standard temperature and pressure values for sea level?',
      wrongAnswers: ['59°C and 1013.2 millibars.', '59°F and 29.92 millibars.'],
      correctAnswer: '15°C and 29.92" Hg.',
    },
    {
      id: 'glider_pilots_ground_school_201',
      question:
        'If a pilot changes the altimeter setting from 30.11 to 29.96, what is the approximate change in indication?',
      wrongAnswers: ['Altimeter will indicate .15" Hg higher.', 'Altimeter will indicate 150 feet higher.'],
      correctAnswer: 'Altimeter will indicate 150 feet lower.',
    },
    {
      id: 'glider_pilots_ground_school_202',
      question: 'Under which condition will pressure altitude be equal to true altitude?',
      wrongAnswers: [
        'When the atmospheric pressure is 29.92" Hg.',
        'When indicated altitude is equal to the pressure altitude.',
      ],
      correctAnswer: 'When standard atmospheric conditions exist.',
    },
    {
      id: 'glider_pilots_ground_school_203',
      question: 'Under what condition is pressure altitude and density altitude the same value?',
      wrongAnswers: ['At sea level, when the temperature is 0°F.', 'When the altimeter has no installation error.'],
      correctAnswer: 'At standard temperature.',
    },
    {
      id: 'glider_pilots_ground_school_204',
      question:
        'If a flight is made from an area of low pressure into an area of high pressure without the altimeter setting being adjusted, the altimeter will indicate',
      wrongAnswers: ['the actual altitude above sea level.', 'higher than the actual altitude above sea level.'],
      correctAnswer: 'lower than the actual altitude above sea level.',
    },
    {
      id: 'glider_pilots_ground_school_205',
      question:
        'If a flight is made from an area of high pressure into an area of lower pressure without the altimeter setting being adjusted, the altimeter will indicate',
      wrongAnswers: ['lower than the actual altitude above sea level.', 'the actual altitude above sea level.'],
      correctAnswer: 'higher than the actual altitude above sea level.',
    },
    {
      id: 'glider_pilots_ground_school_206',
      question: 'Under what condition will true altitude be lower than indicated altitude?',
      wrongAnswers: [
        'In warmer than standard air temperature.',
        'When density altitude is higher than indicated altitude.',
      ],
      correctAnswer: 'In colder than standard air temperature.',
    },
    {
      id: 'glider_pilots_ground_school_207',
      question: 'Which condition would cause the altimeter to indicate a lower altitude than true altitude?',
      wrongAnswers: ['Air temperature lower than standard.', 'Atmospheric pressure lower than standard.'],
      correctAnswer: 'Air temperature warmer than standard.',
    },
    {
      id: 'glider_pilots_ground_school_208',
      question: 'Which factor would tend to increase the density altitude at a given airport?',
      wrongAnswers: ['An increase in barometric pressure.', 'A decrease in relative humidity.'],
      correctAnswer: 'An increase in ambient temperature.',
    },
    {
      id: 'glider_pilots_ground_school_209',
      question:
        'The wind at 5,000 feet AGL, is southwesterly while the surface wind is southerly. This difference in direction is primarily due to',
      wrongAnswers: ['stronger pressure gradient at higher altitudes.', 'stronger Coriolis force at the surface.'],
      correctAnswer: 'friction between the wind and the surface.',
    },
    {
      id: 'glider_pilots_ground_school_210',
      question: 'What is meant by the term "dewpoint"?',
      wrongAnswers: [
        'The temperature at which condensation and evaporation are equal.',
        'The temperature at which dew will always form.',
      ],
      correctAnswer: 'The temperature to which air must be cooled to be saturated.',
    },
    {
      id: 'glider_pilots_ground_school_211',
      question: 'The amount of water vapor which air can hold depends on the',
      wrongAnswers: ['dewpoint.', 'stability of the air.'],
      correctAnswer: 'air temperature.',
    },
    {
      id: 'glider_pilots_ground_school_212',
      question: 'Clouds, fog, or dew will always form when',
      wrongAnswers: ['water vapor is present.', 'relative humidity reaches 100 percent.'],
      correctAnswer: 'water vapor condenses.',
    },
    {
      id: 'glider_pilots_ground_school_213',
      question: 'What are the processes by which moisture is added to unsaturated air?',
      wrongAnswers: ['Heating and condensation.', 'Supersaturation and evaporation.'],
      correctAnswer: 'Evaporation and sublimation.',
    },
    {
      id: 'glider_pilots_ground_school_214',
      question: 'Which conditions result in the formation of frost?',
      wrongAnswers: [
        'The temperature of the collecting surface is at or below freezing when small droplets of moisture fall on the surface.',
        'The temperature of the surrounding air is at or below freezing when small drops of moisture fall on the collecting surface.',
      ],
      correctAnswer:
        'The temperature of the collecting surface is at or below the dewpoint of the adjacent air and the dewpoint is below freezing.',
    },
    {
      id: 'glider_pilots_ground_school_215',
      question: 'The presence of ice pellets at the surface is evidence that there',
      wrongAnswers: ['are thunderstorms in the area.', 'has been cold frontal passage.'],
      correctAnswer: 'is a temperature inversion with freezing rain at a higher altitude.',
    },
    {
      id: 'glider_pilots_ground_school_216',
      question: 'What measurement can be used to determine the stability of the atmosphere?',
      wrongAnswers: ['Atmospheric pressure.', 'Surface temperature.'],
      correctAnswer: 'Actual lapse rate.',
    },
    {
      id: 'glider_pilots_ground_school_217',
      question: 'What would decrease the stability of an air mass?',
      wrongAnswers: ['Cooling from below.', 'Decrease in water vapor.'],
      correctAnswer: 'Warming from below.',
    },
    {
      id: 'glider_pilots_ground_school_218',
      question: 'What is a characteristic of stable air?',
      wrongAnswers: ['Unlimited visibility.', 'Cumulus clouds.'],
      correctAnswer: 'Stratiform clouds.',
    },
    {
      id: 'glider_pilots_ground_school_219',
      question: 'Moist, stable air flowing upslope can be expected to',
      wrongAnswers: ['cause showers and thunderstorms.', 'develop convective turbulence.'],
      correctAnswer: 'produce stratus type clouds.',
    },
    {
      id: 'glider_pilots_ground_school_220',
      question: 'If an unstable air mass is forced upward, what type clouds can be expected?',
      wrongAnswers: [
        'Stratus clouds with little vertical development.',
        'Stratus clouds with considerable associated turbulence.',
      ],
      correctAnswer: 'Clouds with considerable vertical development and associated turbulence.',
    },
    {
      id: 'glider_pilots_ground_school_221',
      question: 'What feature is associated with a temperature inversion?',
      wrongAnswers: ['An unstable layer of air.', 'Chinook winds on mountain slopes.'],
      correctAnswer: 'A stable layer of air.',
    },
    {
      id: 'glider_pilots_ground_school_222',
      question:
        'What is the approximate base of the cumulus clouds if the surface air temperature at 1,000 feet MSL is 70°F and the dewpoint is 48°F?',
      wrongAnswers: ['4,000 feet MSL.', '5,000 feet MSL.'],
      correctAnswer: '6,000 feet MSL.',
    },
    {
      id: 'glider_pilots_ground_school_223',
      question:
        'At approximately what altitude above the surface would the pilot expect the base of cumuliform clouds if the surface air temperature is 82°F and the dewpoint is 38°F?',
      wrongAnswers: ['9,000 feet AGL.', '11,000 feet AGL.'],
      correctAnswer: '10,000 feet AGL.',
    },
    {
      id: 'glider_pilots_ground_school_224',
      question: 'What are characteristics of a moist, unstable air mass?',
      wrongAnswers: ['Poor visibility and smooth air.', 'Stratiform clouds and showery precipitation.'],
      correctAnswer: 'Cumuliform clouds and showery precipitation.',
    },
    {
      id: 'glider_pilots_ground_school_225',
      question: 'What are characteristics of unstable air?',
      wrongAnswers: ['Turbulence and poor surface visibility.', 'Nimbostratus clouds and good surface visibility.'],
      correctAnswer: 'Turbulence and good surface visibility.',
    },
    {
      id: 'glider_pilots_ground_school_226',
      question: 'A stable air mass is most likely to have which characteristic?',
      wrongAnswers: ['Showery precipitation.', 'Turbulent air.'],
      correctAnswer: 'Smooth air.',
    },
    {
      id: 'glider_pilots_ground_school_227',
      question: 'The suffix "nimbus", used in naming clouds, means',
      wrongAnswers: ['a cloud with extensive vertical development.', 'a middle cloud containing ice pellets.'],
      correctAnswer: 'a rain cloud.',
    },
    {
      id: 'glider_pilots_ground_school_228',
      question: 'Clouds are divided into four families according to their',
      wrongAnswers: ['outward shape.', 'composition.'],
      correctAnswer: 'height range.',
    },
    {
      id: 'glider_pilots_ground_school_229',
      question:
        'An almond or lens-shaped cloud which appears stationary, but which may contain winds of 50 knots or more, is referred to as',
      wrongAnswers: ['an inactive frontal cloud.', 'a funnel cloud.'],
      correctAnswer: 'a lenticular cloud.',
    },
    {
      id: 'glider_pilots_ground_school_230',
      question: 'Crests of standing mountain waves may be marked by stationary, lens-shaped clouds known as',
      wrongAnswers: ['mammatocumulus clouds.', 'roll clouds.'],
      correctAnswer: 'standing lenticular clouds.',
    },
    {
      id: 'glider_pilots_ground_school_231',
      question: 'What clouds have the greatest turbulence?',
      wrongAnswers: ['Towering cumulus.', 'Nimbostratus.'],
      correctAnswer: 'Cumulonimbus.',
    },
    {
      id: 'glider_pilots_ground_school_232',
      question: 'What cloud types would indicate convective turbulence?',
      wrongAnswers: ['Cirrus clouds.', 'Nimbostratus clouds.'],
      correctAnswer: 'Towering cumulus clouds.',
    },
    {
      id: 'glider_pilots_ground_school_233',
      question: 'The boundary between two different air masses is referred to as a',
      wrongAnswers: ['frontolysis.', 'frontogenesis.'],
      correctAnswer: 'front.',
    },
    {
      id: 'glider_pilots_ground_school_234',
      question: 'One of the most easily recognized discontinuities across a front is',
      wrongAnswers: ['an increase in cloud coverage.', 'an increase in relative humidity.'],
      correctAnswer: 'a change in temperature.',
    },
    {
      id: 'glider_pilots_ground_school_235',
      question: 'One weather phenomenon which will always occur when flying across a front is a change in the',
      wrongAnswers: ['type of precipitation.', 'stability of the air mass.'],
      correctAnswer: 'wind direction.',
    },
    {
      id: 'glider_pilots_ground_school_236',
      question: 'Steady precipitation preceding a front is an indication of',
      wrongAnswers: ['stratiform clouds with moderate turbulence.', 'cumuliform clouds with little or no turbulence.'],
      correctAnswer: 'stratiform clouds with little or no turbulence.',
    },
    {
      id: 'glider_pilots_ground_school_237',
      question: 'Possible mountain wave turbulence could be anticipated when winds of 40 knots or greater blow',
      wrongAnswers: [
        'down a mountain valley, and the air is unstable.',
        'parallel to a mountain peak, and the air is stable.',
      ],
      correctAnswer: 'across a mountain ridge, and the air is stable.',
    },
    {
      id: 'glider_pilots_ground_school_238',
      question: 'Where does wind shear occur?',
      wrongAnswers: ['Only at higher altitudes.', 'Only at lower altitudes.'],
      correctAnswer: 'At all altitudes, in all directions.',
    },
    {
      id: 'glider_pilots_ground_school_239',
      question: 'When may hazardous wind shear be expected?',
      wrongAnswers: [
        'When stable air crosses a mountain barrier where it tends to flow in lavers forming lenticular clouds.',
        'Following frontal passage when stratocumulus clouds form indicating mechanical mixing.',
      ],
      correctAnswer: 'In areas of low-level temperature inversion, frontal zones, and clear air turbulence.',
    },
    {
      id: 'glider_pilots_ground_school_240',
      question:
        'A pilot can expect a wind-shear zone in a temperature inversion whenever the windspeed at 2,000 to 4,000 feet above the surface is at least',
      wrongAnswers: ['10 knots.', '15 knots.'],
      correctAnswer: '25 knots.',
    },
    {
      id: 'glider_pilots_ground_school_241',
      question: 'One in-flight condition necessary for structural icing to form is',
      wrongAnswers: ['small temperature/dewpoint spread.', 'stratiform clouds.'],
      correctAnswer: 'visible moisture.',
    },
    {
      id: 'glider_pilots_ground_school_242',
      question: 'Why is frost considered hazardous to flight?',
      wrongAnswers: [
        'Frost changes the basic aerodynamic shape of the airfoils, thereby increasing lift.',
        'Frost slows the airflow over the airfoils, thereby increasing control effectiveness.',
      ],
      correctAnswer: 'Frost spoils the smooth flow of air over the wings, thereby decreasing lifting capability.',
    },
    {
      id: 'glider_pilots_ground_school_243',
      question: 'The conditions necessary for the formation of cumulonimbus clouds are a lifting action and',
      wrongAnswers: ['unstable air containing an excess of condensation nuclei.', 'either stable or unstable air.'],
      correctAnswer: 'unstable, moist air.',
    },
    {
      id: 'glider_pilots_ground_school_244',
      question: 'What feature is normally associated with the cumulus stage of a thunderstorm?',
      wrongAnswers: ['Roll cloud.', 'Frequent lightning.'],
      correctAnswer: 'Continuous updraft.',
    },
    {
      id: 'glider_pilots_ground_school_245',
      question: 'Which weather phenomenon signals the beginning of the mature stage of a thunderstorm?',
      wrongAnswers: ['The appearance of an anvil top.', 'Maximum growth rate of the clouds.'],
      correctAnswer: 'Precipitation beginning to fall.',
    },
    {
      id: 'glider_pilots_ground_school_246',
      question: 'What conditions are necessary for the formation of thunderstorms?',
      wrongAnswers: [
        'High humidity, high temperature, and cumulus clouds.',
        'Lifting force, moist air, and extensive cloud cover.',
      ],
      correctAnswer: 'High humidity, lifting force, and unstable conditions.',
    },
    {
      id: 'glider_pilots_ground_school_247',
      question: 'During the life cycle of a thunderstorm, which stage is characterized predominately by downdrafts?',
      wrongAnswers: ['Cumulus.', 'Mature.'],
      correctAnswer: 'Dissipating.',
    },
    {
      id: 'glider_pilots_ground_school_248',
      question: 'Thunderstorms reach their greatest intensity during the',
      wrongAnswers: ['downdraft stage.', 'cumulus stage.'],
      correctAnswer: 'mature stage.',
    },
    {
      id: 'glider_pilots_ground_school_249',
      question: 'Thunderstorms which generally produce the most intense hazard to aircraft are',
      wrongAnswers: ['steady-state thunderstorms.', 'warm front thunderstorms.'],
      correctAnswer: 'squall line thunderstorms.',
    },
    {
      id: 'glider_pilots_ground_school_250',
      question:
        'A nonfrontal, narrow band of active thunderstorms that often develop ahead of a cold front is known as a',
      wrongAnswers: ['prefrontal system.', 'dry line.'],
      correctAnswer: 'squall line.',
    },
    {
      id: 'glider_pilots_ground_school_251',
      question:
        'If there is thunderstorm activity in the vicinity of an airport at which you plan to land, which hazardous atmospheric phenomenon might be expected on the landing approach?',
      wrongAnswers: ['Precipitation static.', 'Steady rain.'],
      correctAnswer: 'Wind-shear turbulence.',
    },
    {
      id: 'glider_pilots_ground_school_252',
      question: 'What situation is most conducive to the formation of radiation fog?',
      wrongAnswers: [
        'Moist, tropical air moving over cold, offshore water.',
        'The movement of cold air over much warmer water.',
      ],
      correctAnswer: 'Warm, moist air over low, flatland areas on clear, calm nights',
    },
    {
      id: 'glider_pilots_ground_school_253',
      question:
        'If the temperature/dewpoint spread is small and decreasing, and the temperature is 62°F, what type weather is most likely to develop?',
      wrongAnswers: ['Freezing precipitation.', 'Thunderstorms.'],
      correctAnswer: 'Fog or low clouds.',
    },
    {
      id: 'glider_pilots_ground_school_254',
      question: 'In which situation is advection fog most likely to form?',
      wrongAnswers: [
        'A warm, moist air mass on the windward side of mountains.',
        'A light breeze blowing colder air out to sea.',
      ],
      correctAnswer: 'An air mass moving inland from the coast in winter.',
    },
    {
      id: 'glider_pilots_ground_school_255',
      question: 'What types of fog depend upon wind in order to exist?',
      wrongAnswers: ['Radiation fog and ice fog.', 'Steam fog and ground fog.'],
      correctAnswer: 'Advection fog and upslope fog.',
    },
    {
      id: 'glider_pilots_ground_school_256',
      question: 'The development of thermals depends upon',
      wrongAnswers: ['a counterclockwise circulation of air.', 'temperature inversions.'],
      correctAnswer: 'solar heating.',
    },
    {
      id: 'glider_pilots_ground_school_257',
      question: 'Which is considered to be the most hazardous condition when soaring in the vicinity of thunderstorms?',
      wrongAnswers: ['Static electricity.', 'Lightning.'],
      correctAnswer: 'Wind shear and turbulence.',
    },
    {
      id: 'glider_pilots_ground_school_258',
      question: 'Convective circulation patterns associated with sea breezes are caused by',
      wrongAnswers: [
        'warm, dense air moving inland from over the water.',
        'water absorbing and radiating heat faster than the land.',
      ],
      correctAnswer: 'cool, dense air moving inland from over the water.',
    },
    {
      id: 'glider_pilots_ground_school_259',
      question: 'During which period is a sea breeze front most suitable for soaring flight?',
      wrongAnswers: ['Shortly after sunrise.', 'During the early forenoon.'],
      correctAnswer: 'During the afternoon.',
    },
    {
      id: 'glider_pilots_ground_school_260',
      question: 'Which weather phenomenon is always associated with a thunderstorm?',
      wrongAnswers: ['Heavy rain.', 'Hail.'],
      correctAnswer: 'Lightning.',
    },
    {
      id: 'glider_pilots_ground_school_261',
      question: 'Individual forecasts for specific routes of flight can be obtained from which weather source?',
      wrongAnswers: ['Terminal Forecasts.', 'Area Forecasts.'],
      correctAnswer: "Transcribed Weather Broadcasts (TWEB's).",
    },
    {
      id: 'glider_pilots_ground_school_262',
      question:
        'Transcribed Weather Broadcasts (TWEB) may be monitored by tuning the appropriate radio receiver to certain',
      wrongAnswers: ['airport advisory frequencies.', 'ATIS frequencies.'],
      correctAnswer: 'VOR and NDB frequencies.',
    },
    {
      id: 'glider_pilots_ground_school_263',
      question: 'When telephoning a weather briefing facility for preflight weather information, pilots should state',
      wrongAnswers: [
        'that they possess a current pilot certificate.',
        'the full name and address of the formation commander.',
      ],
      correctAnswer: 'whether they intend to fly VFR only.',
    },
    {
      id: 'glider_pilots_ground_school_264',
      question: 'To get a complete weather briefing for the planned flight, the pilot should request',
      wrongAnswers: ['a general briefing.', 'an abbreviated briefing.'],
      correctAnswer: 'a standard briefing.',
    },
    {
      id: 'glider_pilots_ground_school_265',
      question:
        'Which type weather briefing should a pilot request, when departing within the hour, if no preliminary weather information has been received?',
      wrongAnswers: ['Outlook briefing.', 'Abbreviated briefing.'],
      correctAnswer: 'Standard briefing.',
    },
    {
      id: 'glider_pilots_ground_school_266',
      question: 'Which type of weather briefing should a pilot request to supplement mass disseminated data?',
      wrongAnswers: ['An outlook briefing.', 'A supplemental briefing.'],
      correctAnswer: 'An abbreviated briefing.',
    },
    {
      id: 'glider_pilots_ground_school_267',
      question: 'To update a previous weather briefing, a pilot should request',
      wrongAnswers: ['a standard briefing.', 'an outlook briefing.'],
      correctAnswer: 'an abbreviated briefing.',
    },
    {
      id: 'glider_pilots_ground_school_268',
      question:
        'A weather briefing that is provided when the information requested is 6 or more hours in advance of the proposed departure time is',
      wrongAnswers: ['a forecast briefing.', 'a prognostic briefing.'],
      correctAnswer: 'an outlook briefing.',
    },
    {
      id: 'glider_pilots_ground_school_269',
      question: 'When requesting weather information for the following morning, a pilot should request',
      wrongAnswers: ['a standard briefing.', 'an abbreviated briefing.'],
      correctAnswer: 'an outlook briefing.',
    },
    {
      id: 'glider_pilots_ground_school_270',
      question: "For aviation purposes, ceiling is defined as the height above the Earth's surface of the",
      wrongAnswers: [
        'lowest reported obscuration and the highest layer of clouds reported as overcast.',
        'lowest layer of clouds reported as scattered, broken, or thin.',
      ],
      correctAnswer: 'lowest broken or overcast layer or vertical visibility into an obscuration.',
    },
    {
      id: 'glider_pilots_ground_school_271',
      figures: ['sport_rec_private_akts_figure_13.png'],
      question: 'What effect do the clouds mentioned in the weather briefing have on soaring conditions?',
      wrongAnswers: [
        'All thermals stop at the base of the clouds.',
        'Thermals persist to the tops of the clouds at 25,000 feet.',
      ],
      correctAnswer: 'The scattered clouds indicate thermals at least to the tops of the lower clouds.',
    },
    {
      id: 'glider_pilots_ground_school_272',
      figures: ['sport_rec_private_akts_figure_13.png'],
      question: 'At what time will thermals begin to form?',
      wrongAnswers: [
        'Between 1300Z and 1500Z while the sky is clear.',
        'About 2000Z (early afternoon) when the wind begins to increase.',
      ],
      correctAnswer: 'By 1500Z (mid-morning) when scattered clouds begin to form.',
    },
    {
      id: 'glider_pilots_ground_school_273',
      question:
        'To obtain a continuous transcribed weather briefing, including winds aloft and route forecasts for a cross-country flight, a pilot should monitor a',
      wrongAnswers: [
        'VHF radio receiver tuned to an Automatic Terminal Information Service (ATIS) frequency.',
        'regularly scheduled weather broadcast on a VOR frequency.',
      ],
      correctAnswer: 'Transcribed Weather Broadcast (TWEB) on an NDB or a VOR facility.',
    },
    {
      id: 'glider_pilots_ground_school_274',
      question: 'FAA advisory circulars (some free, others at cost) are available to all pilots and are obtained by',
      wrongAnswers: ['subscribing to the Federal Register.', 'distribution from the nearest FAA district office.'],
      correctAnswer: 'ordering those desired from the Government Printing Office.',
    },
    {
      id: 'glider_pilots_ground_school_276',
      question:
        'In addition to the standard briefing, what additional information should be asked of the weather briefer in order to evaluate soaring conditions?',
      wrongAnswers: [
        'Dry adiabatic rate of cooling to determine the height of cloud bases.',
        'Moist adiabatic rate of cooling to determine the height of cloud tops.',
      ],
      correctAnswer: 'The upper soundings to determine the thermal index at all soaring levels.',
    },
    {
      id: 'glider_pilots_ground_school_277',
      question:
        'What should pilots state initially when telephoning a weather briefing facility for preflight weather information?',
      wrongAnswers: ['The intended route of flight radio frequencies.', 'The address of the pilot in command.'],
      correctAnswer: 'The intended route of flight and destination.',
    },
    {
      id: 'glider_pilots_ground_school_278',
      question:
        'What should pilots state initially when telephoning a weather briefing facility for preflight weather information?',
      wrongAnswers: ['Tell the number of occupants on board.', 'State their total flight time.'],
      correctAnswer: 'Identify themselves as pilots.',
    },
    {
      id: 'glider_pilots_ground_school_279',
      question: 'When telephoning a weather briefing facility for preflight weather information, pilots should state',
      wrongAnswers: ['true airspeed.', 'fuel on board.'],
      correctAnswer: "the aircraft identification or the pilot's name.",
    },
    {
      id: 'glider_pilots_ground_school_280',
      figures: ['sport_rec_private_akts_figure_20.png'],
      question: '(Refer to area 3) Determine the approximate latitude and longitude of Currituck County Airport.',
      wrongAnswers: ["36°48°N - 76°01'W.", "47°24'N - 75°58'W."],
      correctAnswer: "36°24'N - 76°01'W.",
    },
    {
      id: 'glider_pilots_ground_school_283',
      figures: ['sport_rec_private_akts_figure_22.png'],
      question: '(Refer to area 3.) Determine the approximate latitude and longitude of Shoshone County Airport.',
      wrongAnswers: ["47°02'N - 116°11'W.", "47°32'N - 116°41'W."],
      correctAnswer: "47°33'N - 116°11'W.",
    },
    {
      id: 'glider_pilots_ground_school_284',
      figures: ['sport_rec_private_akts_figure_26.png'],
      question: '(Refer to area 2.) What is the approximate latitude and longitude of Cooperstown Airport?',
      wrongAnswers: ["47°25'N - 99°54'W.", "47°55°N - 98°06'W."],
      correctAnswer: "47°25'N - 98°06'W.",
    },
    {
      id: 'glider_pilots_ground_school_285',
      figures: ['sport_rec_private_akts_figure_25.png'],
      question:
        '(Refer to area 4.) The floor of Class B airspace overlying Hicks Airport (T67) north-northwest of Fort Worth Meacham Field is',
      wrongAnswers: ['at the surface.', '3,200 feet MSL.'],
      correctAnswer: '4,000 feet MSL.',
    },
    {
      id: 'glider_pilots_ground_school_286',
      figures: ['sport_rec_private_akts_figure_25.png'],
      question: '(Refer to area 2.) The floor of Class B airspace at Addison Airport is',
      wrongAnswers: ['at the surface.', '3,100 feet MSL.'],
      correctAnswer: '3,000 feet MSL.',
    },
    {
      id: 'glider_pilots_ground_school_287',
      figures: ['sport_rec_private_akts_figure_20.png'],
      question: '(Refer to area 4 ) What hazards to aircraft may exist in restricted areas such as R-5302B?',
      wrongAnswers: [
        'Military training activities that necessitate acrobatic or abrupt flight maneuvers.',
        'High volume of pilot training or an unusual type of aerial activity.',
      ],
      correctAnswer: 'Unusual, often invisible, hazards such as aerial gunnery or guided missiles.',
    },
    {
      id: 'glider_pilots_ground_school_288',
      figures: ['sport_rec_private_akts_figure_26.png'],
      question: '(Refer to area 2) What hazards to aircraft may exist in areas such as Devils Lake East MOA?',
      wrongAnswers: [
        'Unusual, often invisible, hazards to aircraft such as artillery firing, aerial gunnery, or guided missiles.',
        'High volume of pilot training or an unusual type of aerial activity.',
      ],
      correctAnswer: 'Military training activities that necessitate acrobatic or abrupt flight maneuvers.',
    },
    {
      id: 'glider_pilots_ground_school_289',
      figures: ['sport_rec_private_akts_figure_21.png'],
      question: '(Refer to area 3.) What type military flight operations should a pilot expect along IR 644?',
      wrongAnswers: [
        'VFR training flights above 1,500 feet AGL at speeds less than 250 knots.',
        'Instrument training flights below 1,500 feet AGL al speeds in excess of 150 knots.',
      ],
      correctAnswer: 'IFR training flights above 1,500 feet AGL at speeds in excess of 250 knots.',
    },
    {
      id: 'glider_pilots_ground_school_293',
      figures: ['sport_rec_private_akts_figure_22.png'],
      question:
        '(Refer to area 1.) The visibility and cloud clearance requirements to operate VFR during daylight hours over Sandpoint Airport at 1,200 feet AGL are',
      wrongAnswers: [
        '1 mile and 1,000 feet above, 500 feet below, and 2,000 feet horizontally from each cloud.',
        '1 mile and clear of clouds.',
      ],
      correctAnswer: '3 miles and 1,000 feet above, 500 feet below, and 20 feet horizontally from each cloud.',
    },
    {
      id: 'glider_pilots_ground_school_295',
      figures: ['sport_rec_private_akts_figure_26.png'],
      question:
        '(Refer to area 2.) The visibility and cloud clearance requirements to operate VFR during daylight hours over the town of Cooperstown between 1,200 feet AGL and 10,000 feet MSL are',
      wrongAnswers: [
        '1 mile and clear of clouds.',
        '1 mile and 1,000 feet above, 500 feet below, and 2,00 feet horizontally from clouds.',
      ],
      correctAnswer: '3 miles and 1,000 feet above, 500 feet below, and 2,00 feet horizontally from clouds.',
      hint: 'This is Class E airspace. See table referencing FAR 91.155 on page 31.',
    },
    {
      id: 'glider_pilots_ground_school_296',
      figures: ['sport_rec_private_akts_figure_26.png'],
      question:
        '(Refer to area 2.) The visibility and cloud clearance requirements to operate over the town of Cooperstown below 700 feet AGL are',
      wrongAnswers: [
        '3 miles and clear of clouds.',
        '1 mile and 1,000 feet above, 500 feet below, and 20 feet horizontally from clouds.',
      ],
      correctAnswer: '1 mile and clear of clouds.',
    },
    {
      id: 'glider_pilots_ground_school_298',
      figures: ['sport_rec_private_akts_figure_26.png'],
      question: '(Refer to area 5) The airspace overlying and within 5 miles of Barnes County Airport is',
      wrongAnswers: [
        'Class D airspace from the surface to the floor of the overlying Class E airspace.',
        'Class E airspace from the surface to 1.200 feet MSL.',
      ],
      correctAnswer: 'Class G airspace from the surface to 700 feet AGL.',
    },
    {
      id: 'glider_pilots_ground_school_299',
      figures: ['sport_rec_private_akts_figure_25.png'],
      question: '(Refer to area 7.) The airspace overlying McKinney (TKI) is controlled from the surface to',
      wrongAnswers: ['2,500 feet MSL.', '700 feet AGL.'],
      correctAnswer: '2,900 feet MSL.',
    },
    {
      id: 'glider_pilots_ground_school_300',
      figures: ['sport_rec_private_akts_figure_25.png'],
      question: '(Refer to area 4.) The airspace directly overlying Fort Worth Meacham is',
      wrongAnswers: ['Class B airspace to 10,000 feet MSL.', 'Class C airspace to 5,000 feet MSL.'],
      correctAnswer: 'Class D airspace to 3,200 feet MSL.',
      hint: 'The segmented blue lines indicate an airspace.  The number in the blue segmented line box indicates the ceiling of this airspace.',
    },
    {
      id: 'glider_pilots_ground_school_301',
      figures: ['sport_rec_private_akts_figure_23.png'],
      question:
        '(Refer to area 3.) What is the floor of the Savannah Class C airspace at the shelf area (outer circle)?',
      wrongAnswers: ['1,300 feet AGL.', '1,700 feet MSL.'],
      correctAnswer: '1,300 feet MSL.',
      hint: 'All airspace floor/ceiling values are given in MSL. (TODO: double check this)',
    },
    {
      id: 'glider_pilots_ground_school_302',
      figures: ['sport_rec_private_akts_figure_22.png'],
      question:
        '(Refer to area 3.) The vertical limits of that portion of Class E airspace designated as a Federal Airway over Magee Airport are',
      wrongAnswers: ['700 feet MSL to 12,500 feet MSL.', '7,500 feet MSL to 17,999 feet MSL.'],
      correctAnswer: '1,200 feet AGL to 17,999 feet MSL.',
    },
    {
      id: 'glider_pilots_ground_school_304',
      figures: ['sport_rec_private_akts_figure_20.png'],
      question: '(Refer to area 5) The CAUTION box denotes what hazard to aircraft?',
      wrongAnswers: ['Unmarked ballon on cable to 3,008 feet AGL', 'Unmarked blimp hangars at 308 feet MSL.'],
      correctAnswer: 'Unmarked balloon on cable to 3,008 feet MSL.',
    },
    {
      id: 'glider_pilots_ground_school_305',
      figures: ['sport_rec_private_akts_figure_20.png'],
      question: '(Refer to area 2.) The flag symbol at Lake Drummond represents a',
      wrongAnswers: [
        'compulsory reporting point for Norfolk Class C airspace.',
        'compulsory reporting point for Hampton Roads Airport.',
      ],
      correctAnswer: 'visual checkpoint used to identify position for initial callup to Norfolk Approach Control.',
    },
    {
      id: 'glider_pilots_ground_school_306',
      figures: ['sport_rec_private_akts_figure_20.png'],
      question: '(Refer to area 2.) The elevation of the Chesapeake Regional Airport is',
      wrongAnswers: ['55 feet.', '230 feet.'],
      correctAnswer: '19 feet.',
    },
    {
      id: 'glider_pilots_ground_school_307',
      figures: ['sport_rec_private_akts_figure_21.png'],
      question:
        'The terrain elevation of the light tan area between Minot (area 1) and Audubon Lake (area 2) varies from',
      wrongAnswers: ['sea level to 2,000 feet MSL.', '2,000 feet to 2,700 feet MSL.'],
      correctAnswer: '2,000 feet to 2,500 feet MSL.',
    },
    {
      id: 'glider_pilots_ground_school_308',
      figures: ['sport_rec_private_akts_figure_23.png'],
      question:
        'The flag symbols at Statesboro Bullock County Airport, Claxton-Evans County Airport (area 2), and Ridgeland Airport are',
      wrongAnswers: ['outer boundaries of Savannah Class C airspace.', 'airports with special traffic patterns.'],
      correctAnswer:
        'visual checkpoints to identify position for initial callup prior to entering Savannah Class C airspace.',
    },
    {
      id: 'glider_pilots_ground_school_309',
      figures: ['sport_rec_private_akts_figure_23.png'],
      question:
        '(Refer to area 3.) What is the height of the lighted obstacle approximately 6 nautical miles southwest of Savannah International?',
      wrongAnswers: ['1,500 feet MSL.', '1,531 feet AGL.'],
      correctAnswer: '1,548 feet MSL.',
    },
    {
      id: 'glider_pilots_ground_school_310',
      figures: ['sport_rec_private_akts_figure_23.png'],
      question:
        '(Refer to area 3.) The top of the group obstruction approximately 11 nautical miles from the Savannah VORTAC on the 350° radial is',
      wrongAnswers: ['400 feet AGL.', '455 feet MSL.'],
      correctAnswer: '432 feet MSL.',
    },
    {
      id: 'glider_pilots_ground_school_311',
      figures: ['sport_rec_private_akts_figure_24.png'],
      question:
        '(Refer to area 1.) What minimum altitude is necessary to vertically clear the obstacle on the northeast side of Airpark East Airport by 500 feet?',
      wrongAnswers: ['1,010 feet MSL.', '1,283 feet MSL.'],
      correctAnswer: '1,273 feet MSL.',
    },
    {
      id: 'glider_pilots_ground_school_312',
      figures: ['sport_rec_private_akts_figure_24.png'],
      question:
        '(Refer to area 2.) What minimum altitude is necessary to vertically clear the obstacle on the southeast side of Winnsboro Airport by 500 feet?',
      wrongAnswers: ['823 feet MSL.', '1,013 feet MSL.'],
      correctAnswer: '1,403 feet MSL.',
    },
    {
      id: 'glider_pilots_ground_school_313',
      figures: ['sport_rec_private_akts_figure_25.png'],
      question: '(Refer to area 2.) The control tower frequency for Addison Airport is',
      wrongAnswers: ['122.95 MHz.', '133.4 MHz.'],
      correctAnswer: '126.0 MHz.',
    },
    {
      id: 'glider_pilots_ground_school_314',
      figures: ['sport_rec_private_akts_figure_25.png'],
      question: '(Refer to area 5.) The navigation facility at Dallas-Ft. Worth International (DFW) is a',
      wrongAnswers: ['VOR.', 'VORTAC.'],
      correctAnswer: 'VOR/DME.',
      hint: 'Refer to "Radio Aids to Navigation in Legend 1.',
    },
    {
      id: 'glider_pilots_ground_school_315',
      figures: ['sport_rec_private_akts_figure_20.png'],
      question: 'Over which area should a glider pilot expect to find the best lift under normal conditions?',
      wrongAnswers: ['7', '5'],
      correctAnswer: '2',
    },
    {
      id: 'glider_pilots_ground_school_318',
      figures: ['sport_rec_private_akts_figure_26.png'],
      question:
        '(Refer to areas 5.) What minimum altitude should be used for a go-ahead point at Eckelson in order to arrive at Barnes County Airport at 1,000 feet AGL if the glide ratio is 22:1 in no wind conditions? Use the recommended safety factor.',
      wrongAnswers: ['5,959 feet MSL.', '7,960 feet MSL.'],
      correctAnswer: '9,359 feet MSL.',
    },
    {
      id: 'glider_pilots_ground_school_319',
      question: 'During the preflight inspection who is responsible for determining the aircraft is safe for flight?',
      wrongAnswers: ['The owner or operator.', 'The certificated mechanic who performed the annual inspection.'],
      correctAnswer: 'The pilot in command.',
    },
    {
      id: 'glider_pilots_ground_school_320',
      question: 'How should an aircraft preflight inspection be accomplished for the first flight of the day?',
      wrongAnswers: [
        'Quick walk around with a check of gas and oil.',
        'Any sequence as determined by the pilot-in-command.',
      ],
      correctAnswer: 'Thorough and systematic means recommended by the manufacturer.',
    },
    {
      id: 'glider_pilots_ground_school_321',
      question: 'Who is primarily responsible for maintaining an aircraft in airworthy condition?',
      wrongAnswers: ['Pilot-in-command.', 'Mechanic.'],
      correctAnswer: 'Owner or operator.',
    },
    {
      id: 'glider_pilots_ground_school_322',
      question: 'FAA advisory circulars (some free, others at cost) are available to all pilots and are obtained by',
      wrongAnswers: ['distribution from the nearest FAA district office.', 'subscribing to the Federal Register.'],
      correctAnswer: 'referring to the FAA internet home page and following the links to the ACs.',
    },
    {
      id: 'glider_pilots_ground_school_323',
      question: 'Prior to starting each maneuver, pilots should',
      wrongAnswers: [
        'check altitude, airspeed, and heading indications.',
        'announce their intentions on the nearest CAF.',
      ],
      correctAnswer: 'visually scan the entire area for collision avoidance.',
    },
    {
      id: 'glider_pilots_ground_school_324',
      question: 'What minimum upward current must a glider encounter to maintain altitude?',
      wrongAnswers: ['At least 2 feet per second.', 'The same as the adjacent down currents.'],
      correctAnswer: "The same as the glider's sink rate.",
    },
    {
      id: 'glider_pilots_ground_school_325',
      question:
        'On which side of a rocky knoll, that is surrounded by vegetation, should a pilot find the best thermals?',
      wrongAnswers: ['On the downwind side.', 'Exactly over the center.'],
      correctAnswer: 'On the side facing the Sun.',
    },
    {
      id: 'glider_pilots_ground_school_326',
      question: 'What is one recommended method for locating thermals?',
      wrongAnswers: ['Fly an ever increasing circular path.', 'Maintain a straight track downwind.'],
      correctAnswer: 'Look for converging streamers of dust or smoke.',
    },
    {
      id: 'glider_pilots_ground_school_327',
      question: 'What is a recommended procedure for entering a dust devil for soaring?',
      wrongAnswers: [
        'Enter above 500 feet and circle the edge in the same direction as the rotation.',
        'Enter below 500 feet and circle the edge opposite the direction of rotation.',
      ],
      correctAnswer: 'Enter at or above 500 feet and circle the edge opposite the direction of rotation.',
    },
    {
      id: 'glider_pilots_ground_school_328',
      question: 'What is an important precaution when soaring in a dust devil?',
      wrongAnswers: [
        'Avoid the clear area at the outside edge of the dust.',
        'Maintain the same direction as the rotation of the vortex.',
      ],
      correctAnswer: 'Avoid the eye of the vortex.',
    },
    {
      id: 'glider_pilots_ground_school_329',
      question: 'What is the best visual indication of a thermal.',
      wrongAnswers: ['Fragmented cumulus clouds with concave bases.', 'Scattered to broken sky with cumulus clouds,'],
      correctAnswer: 'Smooth cumulus clouds with concave bases.',
    },
    {
      id: 'glider_pilots_ground_school_330',
      question: 'How can a pilot locate bubble thermals?',
      wrongAnswers: [
        'Look for wet areas where recent showers have occurred.',
        'Fly the area just above the boundary of a temperature inversion.',
      ],
      correctAnswer: 'Look for birds that are soaring in areas of intermittent heating.',
    },
    {
      id: 'glider_pilots_ground_school_331',
      question: 'Where may the most favorable type thermals for cross-country soaring be found?',
      wrongAnswers: ['Just ahead of a warm front.', 'Under mountain waves.'],
      correctAnswer: 'Along thermal streets.',
    },
    {
      id: 'glider_pilots_ground_school_332',
      question:
        'Where and under what condition can enough lift be found for soaring when the weather is generally stable?',
      wrongAnswers: [
        'In mountain waves that form on the upwind side oft mountains.',
        'Over isolated peaks when strong winds are present.',
      ],
      correctAnswer: 'On the upwind side of hills or ridges with moderate winds present.',
    },
    {
      id: 'glider_pilots_ground_school_333',
      question: "An airport's rotating beacon operated during daylight hours indicates",
      wrongAnswers: ['there are obstructions on the airport.', 'the Air Traffic Control tower is not in operation.'],
      correctAnswer: 'that weather at the airport located in Class D airspace is below basic VFR weather minimums.',
    },
    {
      id: 'glider_pilots_ground_school_334',
      figures: ['sport_rec_private_akts_figure_48.png'],
      question: 'Area C on the airport depicted is classified as a',
      wrongAnswers: ['stabilized area.', 'multiple heliport.'],
      correctAnswer: 'closed runway.',
    },
    {
      id: 'glider_pilots_ground_school_335',
      question: 'The numbers 9 and 27 on a runway indicate that the runway is oriented approximately',
      wrongAnswers: ['009° and 027° true.', '090° and 270° true.'],
      correctAnswer: '090° and 270° magnetic.',
    },
    {
      id: 'glider_pilots_ground_school_336',
      question: 'The vertical limit of Class C airspace above the primary airport is normally',
      wrongAnswers: ['1,200 feet AGL.', '3,000 feet AGL.'],
      correctAnswer: '4,000 feet AGL.',
    },
    {
      id: 'glider_pilots_ground_school_337',
      question: 'The normal radius of the outer area of Class C airspace is',
      wrongAnswers: ['5 nautical miles.', '15 nautical miles.'],
      correctAnswer: '20 nautical miles.',
    },
    {
      id: 'glider_pilots_ground_school_338',
      question: 'All operations within Class C airspace must be in',
      wrongAnswers: ['accordance with instrument flight rules.', 'compliance with ATC clearances and instructions.'],
      correctAnswer: 'an aircraft equipped with a 4096-code transponder with Mode C encoding capability.',
    },
    {
      id: 'glider_pilots_ground_school_339',
      question: 'Under what condition may an aircraft operate from a satellite airport within Class C airspace',
      wrongAnswers: [
        'The pilot must file a flight plan prior to departure.',
        'The pilot must monitor ATC until clear of the Class C airspace.',
      ],
      correctAnswer: 'The pilot must contact ATC as soon as practicable after takeoff.',
    },
    {
      id: 'glider_pilots_ground_school_340',
      question: 'Under what condition, if any, may pilots fly through a restricted area?',
      wrongAnswers: ['When flying on airways with an ATC clearance.', 'Regulations do not allow this.'],
      correctAnswer: "With the controlling agency's authorization.",
    },
    {
      id: 'glider_pilots_ground_school_341',
      question: 'What action should a pilot take when operating under VFR in a Military Operations Area (MOA)?',
      wrongAnswers: [
        'Obtain a clearance from the controlling agency prior to entering the MOA.',
        'Operate only on the airways that transverse the MOA.',
      ],
      correctAnswer: 'Exercise extreme caution when military activity is being conducted.',
    },
    {
      id: 'glider_pilots_ground_school_342',
      question: 'Responsibility for collision avoidance in an alert area rests with',
      wrongAnswers: ['the controlling agency.', 'Air Traffic Control.'],
      correctAnswer: 'all pilots.',
    },
    {
      id: 'glider_pilots_ground_school_343',
      question: 'The lateral dimensions of Class D airspace are based on',
      wrongAnswers: [
        'the number of airports that lie within the Class D airspace.',
        '5 statute miles from the geographical center of the primary airport.',
      ],
      correctAnswer: 'the instrument procedures for which the controlled airspace is established.',
    },
    {
      id: 'glider_pilots_ground_school_344',
      question:
        'A non-tower satellite airport, within the same Class D airspace as that designated for the primary airport, requires radio communications be established and maintained with the',
      wrongAnswers: ["satellite airport's UNICOM.", 'associated Flight Service Station.'],
      correctAnswer: "primary airport's control tower.",
    },
    {
      id: 'glider_pilots_ground_school_345',
      question: 'Prior to entering an Airport Advisory Area, a pilot should',
      wrongAnswers: [
        'monitor ATIS for weather and traffic advisories.',
        'contact approach control for vectors to the traffic pattern.',
      ],
      correctAnswer: 'contact the local FSS for airport and traffic advisories.',
    },
    {
      id: 'glider_pilots_ground_school_346',
      question: 'Which initial action should a pilot take prior to entering Class C airspace?',
      wrongAnswers: ['Contact the tower and request permission to enter.', 'Contact the FSS for traffic advisories.'],
      correctAnswer: 'Contact approach control on the appropriate frequency.',
    },
    {
      id: 'glider_pilots_ground_school_347',
      figures: ['sport_rec_private_akts_figure_49.png'],
      question: 'Select the proper traffic pattern and runway for landing.',
      wrongAnswers: ['Left-hand traffic and Runway 18.', 'Left-hand traffic and Runway 22.'],
      correctAnswer: 'Right-hand traffic and Runway 18.',
    },
    {
      id: 'glider_pilots_ground_school_348',
      figures: ['sport_rec_private_akts_figure_49.png'],
      question: 'If the wind is as shown by the landing direction indicator, the pilot should land on',
      wrongAnswers: ['Runway 22 directly into the wind.', 'Runway 36 and expect a crosswind from the right.'],
      correctAnswer: 'Runway 18 and expect a crosswind from the right.',
      hint: 'This indicator has the tip pointed into the wind, which is the opposite of the windsock diagram. (TODO: double check this)',
    },
    {
      id: 'glider_pilots_ground_school_349',
      figures: ['sport_rec_private_akts_figure_50.png'],
      question: 'The segmented circle indicates that the airport traffic is',
      wrongAnswers: [
        'left-hand for Runway 18 and right-hand for Runway 36.',
        'right-hand for Runway 9 and left-hand for Runway 27.',
      ],
      correctAnswer: 'left-hand for Runway 36 and right-hand for Runway 18.',
    },
    {
      id: 'glider_pilots_ground_school_350',
      figures: ['sport_rec_private_akts_figure_50.png'],
      question:
        'The traffic patterns indicated in the segmented circle have been arranged to avoid flights over an area to the',
      wrongAnswers: ['South of the airport.', 'North of the airport.'],
      correctAnswer: 'Southeast of the airport.',
    },
    {
      id: 'glider_pilots_ground_school_351',
      figures: ['sport_rec_private_akts_figure_50.png'],
      question: 'The segmented circle indicates that a landing on Runway 26 will be with a',
      wrongAnswers: ['left-quartering headwind.', 'right-quartering tailwind.'],
      correctAnswer: 'right-quartering headwind.',
    },
    {
      id: 'glider_pilots_ground_school_352',
      figures: ['sport_rec_private_akts_figure_50.png'],
      question:
        'Which runway and traffic pattern should be used as indicated by the wind cone in the segmented circle?',
      wrongAnswers: ['Right-hand traffic on Runway 9.', 'Right-hand traffic on Runway 18.'],
      correctAnswer: 'Left-hand traffic on Runway 36.',
    },
    {
      id: 'glider_pilots_ground_school_354',
      question: 'Wingtip vortices are created only when an aircraft is',
      wrongAnswers: ['operating at high airspeeds.', 'heavily loaded.'],
      correctAnswer: 'developing lift.',
    },
    {
      id: 'glider_pilots_ground_school_355',
      question: 'The greatest vortex strength occurs when the generating aircraft is',
      wrongAnswers: ['light, dirty, and fast.', 'heavy, dirty, and fast.'],
      correctAnswer: 'heavy, clean, and slow.',
    },
    {
      id: 'glider_pilots_ground_school_356',
      question: 'Wingtip vortices created by large aircraft tend to',
      wrongAnswers: ['rise into the traffic pattern.', 'rise into the takeoff or landing path of a crossing runway.'],
      correctAnswer: 'sink below the aircraft generating turbulence.',
    },
    {
      id: 'glider_pilots_ground_school_357',
      question:
        'When taking off or landing at an airport where heavy aircraft are operating, one should be particularly alert to the hazards of wingtip vortices because this turbulence tends to',
      wrongAnswers: [
        'rise from a crossing runway into the takeoff or landing path.',
        'rise into the traffic pattern area surrounding the airport.',
      ],
      correctAnswer: 'sink into the flightpath of aircraft operating below the aircraft generating the turbulence.',
    },
    {
      id: 'glider_pilots_ground_school_358',
      question: 'The wind condition that requires maximum caution when avoiding wake turbulence on landing is a',
      wrongAnswers: ['light, quartering headwind.', 'strong headwind.'],
      correctAnswer: 'light, quartering tailwind.',
    },
    {
      id: 'glider_pilots_ground_school_359',
      question: 'When landing behind a large aircraft, the pilot should avoid wake turbulence by staying',
      wrongAnswers: [
        "below the large aircraft's final approach path and landing before the large aircraft's touchdown point.",
        "above the large aircraft's final approach path and landing before the large aircraft's touchdown point.",
      ],
      correctAnswer:
        "above the large aircraft's final approach path and landing beyond the large aircraft's touchdown point.",
    },
    {
      id: 'glider_pilots_ground_school_360',
      question:
        'When departing behind a heavy aircraft, the pilot should avoid wake turbulence by maneuvering the aircraft',
      wrongAnswers: ['below and downwind from the heavy aircraft.', 'below and upwind from the heavy aircraft.'],
      correctAnswer: 'above and upwind from the heavy aircraft.',
    },
    {
      id: 'glider_pilots_ground_school_361',
      question: 'Pilots flying over a national wildlife refuge are requested to fly no lower than',
      wrongAnswers: ['1,000 feet AGL.', '3,000 feet AGL.'],
      correctAnswer: '2,000 feet AGL.',
    },
    {
      id: 'glider_pilots_ground_school_362',
      question: 'What effect does haze have on the ability to see traffic or terrain features during flight?',
      wrongAnswers: [
        'Haze causes the eyes to focus at infinity.',
        'The eyes tend to overwork in haze and do not detect relative movement easily.',
      ],
      correctAnswer: 'All traffic or terrain features appear to be farther away than their actual distance.',
    },
    {
      id: 'glider_pilots_ground_school_363',
      question:
        'The most effective method of scanning for other aircraft for collision avoidance during daylight hours is to use',
      wrongAnswers: [
        "regularly spaced concentration on the 3-, 9-, and 12-o'clock positions.",
        'peripheral vision by scanning small sectors and utilizing off-center viewing.',
      ],
      correctAnswer: 'a series of short, regularly spaced eye movements to search each 10-degree sector.',
    },
    {
      id: 'glider_pilots_ground_school_364',
      question:
        'Which technique should a pilot use to scan for traffic to the right and left during straight-and-level flight?',
      wrongAnswers: [
        'Concentrate on relative movement detected in the peripheral vision area.',
        'Continuous sweeping of the windshield from right to left',
      ],
      correctAnswer: 'Systematically focus on different segments of the sky for short intervals.',
    },
    {
      id: 'glider_pilots_ground_school_365',
      question: 'How can you determine if another aircraft is on a collision course with your aircraft?',
      wrongAnswers: [
        'The other aircraft will always appear to get larger and closer at a rapid rate.',
        'The nose of each aircraft is pointed at the same point in space.',
      ],
      correctAnswer: 'There will be no apparent relative motion between your aircraft and the other aircraft.',
    },
    {
      id: 'glider_pilots_ground_school_366',
      question: 'An ATC clearance provides',
      wrongAnswers: ['priority over all other traffic.', 'adequate separation from all traffic.'],
      correctAnswer: 'authorization to proceed under specified traffic conditions in controlled airspace.',
    },
    {
      id: 'glider_pilots_ground_school_367',
      question: 'Which statement best defines hypoxia?',
      wrongAnswers: [
        'An abnormal increase in the volume of air breathed',
        'A condition of gas bubble formation around the joints or muscles.',
      ],
      correctAnswer: 'A state of oxygen deficiency in the body.',
    },
    {
      id: 'glider_pilots_ground_school_368',
      question: 'Rapid or extra deep breathing while using oxygen com cause a condition known as',
      wrongAnswers: ['aerosinusitis.', 'aerotitis.'],
      correctAnswer: 'hyperventilation.',
    },
    {
      id: 'glider_pilots_ground_school_369',
      question: 'Which would most likely result in hyperventilation?',
      wrongAnswers: [
        'The excessive consumption of alcohol.',
        'An extremely slow rate of breathing and insufficient oxygen.',
      ],
      correctAnswer: 'Emotional tension, anxiety, or fear.',
    },
    {
      id: 'glider_pilots_ground_school_370',
      question:
        'A pilot experiencing the effects of hyperventilation should be able to restore the proper carbon dioxide level in the body by',
      wrongAnswers: [
        'closely monitoring the flight instruments to control the airplane.',
        'increasing the breathing rate in order to increase lung ventilation.',
      ],
      correctAnswer: 'slowing the breathing rate, breathing into a bag, or talking aloud.',
    },
    {
      id: 'glider_pilots_ground_school_371',
      question: 'The danger of spatial disorientation during flight in poor visual conditions may be reduced by',
      wrongAnswers: [
        'shifting the eyes quickly between the exterior visual field and the instrument panel.',
        'leaning the body in the opposite direction of the motion of the aircraft.',
      ],
      correctAnswer: 'having faith in the instruments rather than taking a chance on the sensory organs.',
    },
    {
      id: 'glider_pilots_ground_school_372',
      question:
        'A state of temporary confusion resulting from misleading information being sent to the brain by various sensory organs is defined as',
      wrongAnswers: ['hyperventilation.', 'hypoxia.'],
      correctAnswer: 'spatial disorientation.',
    },
    {
      id: 'glider_pilots_ground_school_373',
      question: 'Pilots are more subject to spatial disorientation if',
      wrongAnswers: [
        'they ignore the sensations of muscles and inner ear.',
        'eyes are moved often in the process of cross-checking the flight instruments.',
      ],
      correctAnswer: 'body signals are used to interpret flight attitude.',
    },
    {
      id: 'glider_pilots_ground_school_374',
      question:
        'If a pilot experiences spatial disorientation during flight in a restricted visibility condition, the best way to overcome the effect is to',
      wrongAnswers: [
        'concentrate on yaw, pitch, and roll sensations.',
        'consciously slow the breathing rate until symptoms clear and then resume normal breathing rate.',
      ],
      correctAnswer: 'rely upon the aircraft instrument indications.',
    },
    {
      id: 'glider_pilots_ground_school_375',
      question:
        'FAA advisory circulars containing subject matter specifically related to Airmen are issued under which subject number?',
      wrongAnswers: ['70', '90'],
      correctAnswer: '60',
    },
    {
      id: 'glider_pilots_ground_school_376',
      question:
        'FAA advisory circulars containing subject matter specifically related to Airspace are issued under which subject number?',
      wrongAnswers: ['60', '90'],
      correctAnswer: '70',
    },
    {
      id: 'glider_pilots_ground_school_377',
      question:
        'FAA advisory circulars containing subject matter specifically related to Air Traffic Control and General Operations are issued under which subject number?',
      wrongAnswers: ['60', '70'],
      correctAnswer: '90',
    },
    {
      id: 'glider_pilots_ground_school_379',
      question: 'To stop pitch oscillation (porpoising) during a winch launch, the pilot should',
      wrongAnswers: [
        'release back pressure and then pull back against the cycle of pitching oscillation to get in phase with the undulations.',
        'signal the ground crew to increase the speed of the tow.',
      ],
      correctAnswer: 'relax the back pressure on the control stick and shallow the angle of climb.',
    },
    {
      id: 'glider_pilots_ground_school_380',
      question:
        'A pilot plans to fly solo in the front seat of a two-place glider which displays the following placards on the instrument panel: "MINIMUM PILOT WEIGHT: 135 LB | MAXIMUM PILOT WEIGHT 220 LB | NOTE: Seat ballast should be used as necessary. The recommended towing speed for all tows is 55- 65 knots." What action should be taken if the pilot\'s weight is 115 pounds?',
      wrongAnswers: [
        'Add 20 pounds of seat ballast to the rear seat.',
        'Add 55 pounds of seat ballast to obtain the average pilot weight of 170 pounds.',
      ],
      correctAnswer: 'Add 20 pounds of seat ballast.',
    },
    {
      id: 'glider_pilots_ground_school_381',
      question:
        'A pilot plans to fly solo in the front seat of a two-place glider which displays the following placards on the instrument panel: "MINIMUM PILOT WEIGHT: 135  LB | MAXIMUM PILOT WEIGHT 220 LB | NOTE: Seat ballast should be used as necessary. The recommended towing speed for all tows is 55- 65 knots." What action should be taken if the pilot\'s weight is 125 pounds?',
      wrongAnswers: [
        'Add 10 pounds of seat ballast to the rear seat.',
        'Add 45 pounds of seat ballast to obtain the average pilot weight of 170 pounds.',
      ],
      correctAnswer: 'Add 10 pounds of seat ballast.',
    },
    {
      id: 'glider_pilots_ground_school_382',
      figures: ['sport_rec_private_akts_figure_53.png'],
      question:
        'Calculate the weight and balance of the glider, and determine if the CG is within limits. Pilot (fwd. seat) 160 Ib. Passenger (aft seat) 185 lb.',
      wrongAnswers: [
        'CG 71.65 inches aft of datum - out of limits forward.',
        'CG 79.67 inches aft of datum - within limits.',
      ],
      correctAnswer: 'CG 83.43 inches aft of datum - within limits.',
      hint: 'Center of Gravity is calculated by calculating all moments (Weight * arm (STA)) and then dividing the sum of all moments by the total weight.',
    },
    {
      id: 'glider_pilots_ground_school_383',
      figures: ['sport_rec_private_akts_figure_53.png'],
      question:
        'How is the CG affected if radio and oxygen equipment weighing 35 pounds is added at station 43.8? The glider weighs 945 pounds with a moment of 78,000.2 pound-inches prior to adding the equipment.',
      wrongAnswers: [
        'CG shifts forward 0.79 inch - out of limits forward.',
        'CG shifts aft 1.38 inches - out of limits aft.',
      ],
      correctAnswer: 'CG shifts forward 1.38 inches - within limits.',
    },
    {
      id: 'glider_pilots_ground_school_384',
      figures: ['sport_rec_private_akts_figure_53.png'],
      question: 'What is the CG of the glider if the pilot and passenger each weigh 215 pounds?',
      wrongAnswers: [
        '74.69 inches aft of datum - out of limits forward.',
        '81.08 inches aft of datum - within limits.',
      ],
      correctAnswer: '81.08 inches aft of datum - over maximum gross weight.',
    },
    {
      id: 'glider_pilots_ground_school_385',
      figures: ['sport_rec_private_akts_figure_54.png'],
      question: 'How many feet will the glider sink in 1 statute mile at 53 MPH in still air?',
      wrongAnswers: ['144 feet.', '211 feet.'],
      correctAnswer: '171 feet.',
    },
    {
      id: 'glider_pilots_ground_school_386',
      figures: ['sport_rec_private_akts_figure_54.png'],
      question:
        '*MODIFIED FROM BOOK* At what speed will the glider attain a sink rate of 5 feet per second in still air?',
      wrongAnswers: ['75 MPH.', '85 MPH.'],
      correctAnswer: '82 MPH.',
    },
    {
      id: 'glider_pilots_ground_school_387',
      figures: ['sport_rec_private_akts_figure_54.png'],
      question: 'How many feet will the glider descend at minimum sink speed for 1 statute mile in still air?',
      wrongAnswers: ['132 feet.', '170 feet.'],
      correctAnswer: '180 feet.',
    },
    {
      id: 'glider_pilots_ground_school_388',
      figures: ['sport_rec_private_akts_figure_54.png'],
      question: 'At what speed will the glider gain the most distance while descending 1,000 feet in still air?',
      wrongAnswers: ['44 MPH.', '83 MPH.'],
      correctAnswer: '53 MPH.',
    },
    {
      id: 'glider_pilots_ground_school_389',
      figures: ['sport_rec_private_akts_figure_54.png'],
      question: 'What approximate lift/drag ratio will the glider attain at 68 MPH in still air?',
      wrongAnswers: ['10.5', '21.7'],
      correctAnswer: '28.5',
    },
    {
      id: 'glider_pilots_ground_school_390',
      figures: ['sport_rec_private_akts_figure_55.png'],
      question: 'Illustration 2 means',
      wrongAnswers: ['release towline.', 'ready to tow.'],
      correctAnswer: 'hold position.',
      hint: 'See https://www.ssa.org/soaring-signals/',
    },
    {
      id: 'glider_pilots_ground_school_391',
      figures: ['sport_rec_private_akts_figure_55.png'],
      question: 'Illustration 3 means',
      wrongAnswers: ['stop operations.', 'take up slack.'],
      correctAnswer: 'release towline.',
      hint: 'See https://www.ssa.org/soaring-signals/',
    },
    {
      id: 'glider_pilots_ground_school_392',
      figures: ['sport_rec_private_akts_figure_55.png'],
      question: 'Which illustration is a signal to stop operation?',
      wrongAnswers: ['2', '3'],
      correctAnswer: '7',
      hint: 'See https://www.ssa.org/soaring-signals/',
    },
    {
      id: 'glider_pilots_ground_school_393',
      figures: ['sport_rec_private_akts_figure_55.png'],
      question: 'Which illustration is a signal from the sailplane for the towplane to turn right?',
      wrongAnswers: ['6', '11'],
      correctAnswer: '5',
      hint: 'See https://www.ssa.org/soaring-signals/',
    },
    {
      id: 'glider_pilots_ground_school_394',
      figures: ['sport_rec_private_akts_figure_55.png'],
      question: 'Which illustration is a signal that the glider is unable to release?',
      wrongAnswers: ['8', '11'],
      correctAnswer: '10',
      hint: 'See https://www.ssa.org/soaring-signals/',
    },
    {
      id: 'glider_pilots_ground_school_395',
      figures: ['sport_rec_private_akts_figure_55.png'],
      question: 'Which illustration is a signal to the towplane to reduce airspeed?',
      wrongAnswers: ['7', '10'],
      correctAnswer: '12',
      hint: 'See https://www.ssa.org/soaring-signals/',
    },
    {
      id: 'glider_pilots_ground_school_396',
      figures: ['sport_rec_private_akts_figure_55.png'],
      question: 'Which illustration means the towplane cannot release?',
      wrongAnswers: ['6', '8'],
      correctAnswer: '9',
      hint: 'See https://www.ssa.org/soaring-signals/',
    },
    {
      id: 'glider_pilots_ground_school_397',
      question:
        'What corrective action should the sailplane pilot take during takeoff if the towplane is still on the ground and the sailplane is airborne and drifting to the left?',
      wrongAnswers: [
        'Crab into the wind by holding upwind (right) rudder pressure.',
        'Establish a right wing low drift correction to remain in the flightpath of the towplane.',
      ],
      correctAnswer: 'Crab into the wind so as to maintain a position directly behind the towplane.',
    },
    {
      id: 'glider_pilots_ground_school_398',
      question: 'An indication that the glider has begun a turn too soon on aerotow is that the',
      wrongAnswers: ["glider's nose is pulled to the outside of the turn.", 'towplane will pitch up.'],
      correctAnswer: "towplane's nose is pulled to the outside of the turn.",
    },
    {
      id: 'glider_pilots_ground_school_399',
      question:
        'The sailplane has become airborne and the towplane loses power before leaving the ground. The sailplane should release immediately,',
      wrongAnswers: ['extend the spoilers, and land straight ahead.', 'and maneuver to the left of the towplane.'],
      correctAnswer: 'and maneuver to the right of the towplane.',
    },
    {
      id: 'glider_pilots_ground_school_400',
      question: 'What should a glider pilot do if a towline breaks below 200 feet AGL?',
      wrongAnswers: [
        'Turn into the wind, then back to the runway for a downwind landing.',
        'Turn away from the wind, then back to the runway for a downwind landing.',
      ],
      correctAnswer: 'Land straight ahead or make slight turns to reach a suitable landing area.',
    },
    {
      id: 'glider_pilots_ground_school_401',
      question:
        'A pilot unintentionally enters a steep diving spiral to the left. What is the proper way to recover from this attitude without overstressing the glider?',
      wrongAnswers: [
        'Apply up-elevator pressure to raise the nose.',
        'Apply more up-elevator pressure and then use right aileron pressure to control the overbanking tendency.',
      ],
      correctAnswer:
        'Relax the back pressure and shallow the bank; then apply up-elevator pressure until the nose has been raised to the desired position.',
    },
    {
      id: 'glider_pilots_ground_school_402',
      question:
        'What corrective action should be taken if, while thermalling at minimum sink speed in turbulent air, the left wing drops while turning to the left?',
      wrongAnswers: [
        'Apply more opposite (right) aileron pressure than opposite (right) rudder pressure to counteract the overbanking tendency.',
        'Apply opposite (right) rudder pressure to slow the rate of turn.',
      ],
      correctAnswer: 'Lower the nose before applying opposite (right) aileron pressure.',
    },
    {
      id: 'glider_pilots_ground_school_403',
      question: 'A sailplane pilot can differentiate between a spin and a spiral dive because in a spiral dive,',
      wrongAnswers: ['the speed remains constant.', 'there is a small loss of altitude in each rotation.'],
      correctAnswer: 'the G loads increase.',
    },
    {
      id: 'glider_pilots_ground_school_404',
      question: 'How are forward slips normally performed?',
      wrongAnswers: [
        'With the direction of the slip away from any crosswind that exists.',
        'With rudder and aileron deflection on the same side.',
      ],
      correctAnswer: 'With dive brakes or spoilers fully open.',
    },
    {
      id: 'glider_pilots_ground_school_405',
      question:
        'What would be a proper action or procedure to use if the pilot is getting too low on a cross-country flight in a sailplane?',
      wrongAnswers: [
        'Continue on course until descending to 1,000 feet above the ground and then plan the landing approach',
        'Fly directly into the wind and make a straight-in approach at the end of the glide.',
      ],
      correctAnswer:
        'Have a suitable landing area selected upon reaching 2,000 feet AGL, and a specific field chosen upon reaching 1,500 feet AGL.',
    },
    {
      id: 'glider_pilots_ground_school_406',
      question:
        "What is it often called when a pilot pushes his or her capabilities and the aircraft's limits by trying to maintain visual contact with the terrain in low visibility and ceiling?",
      wrongAnswers: ['Mind set.', 'Peer pressure.'],
      correctAnswer: 'Scud running.',
    },
    {
      id: 'glider_pilots_ground_school_407',
      question: 'What antidotal phrase can help reverse the hazardous attitude of "Antiauthority"?',
      wrongAnswers: ['Rules do not apply in this situation.', 'I know what I am doing.'],
      correctAnswer: 'Follow the rules.',
    },
    {
      id: 'glider_pilots_ground_school_408',
      question: 'What antidotal phrase can help reverse the hazardous attitude of "Impulsivity"?',
      wrongAnswers: ['It could happen to me.', 'Do it quickly to get it over with.'],
      correctAnswer: 'Not so fast, think first.',
    },
    {
      id: 'glider_pilots_ground_school_409',
      question: 'What antidotal phrase can help reverse the hazardous attitude of "Invulnerability"?',
      wrongAnswers: ['It will not happen to me.', 'It can not be that bad.'],
      correctAnswer: 'It could happen to me.',
    },
    {
      id: 'glider_pilots_ground_school_410',
      question: 'What antidotal phrase can help reverse the hazardous attitude of "Macho"?',
      wrongAnswers: ['I can do it.', 'Nothing will happen.'],
      correctAnswer: 'Taking chances is foolish.',
    },
    {
      id: 'glider_pilots_ground_school_411',
      question: 'What antidotal phrase can help reverse the hazardous attitude of "Resignation"?',
      wrongAnswers: ['What is the use.', 'Someone else is responsible.'],
      correctAnswer: 'I am not helpless',
    },
    {
      id: 'glider_pilots_ground_school_412',
      question:
        'Who is responsible for determining whether a pilot is fit to fly for a particular flight, even though he or she holds a current medical certificate?',
      wrongAnswers: ['The FAA.', 'The medical examiner.'],
      correctAnswer: 'The pilot.',
    },
    {
      id: 'glider_pilots_ground_school_413',
      question: 'What is the one common factor which affects most preventable accidents?',
      wrongAnswers: ['Structural failure.', 'Mechanical malfunction.'],
      correctAnswer: 'Human error.',
    },
    {
      id: 'glider_pilots_ground_school_414',
      question:
        'What often leads to spatial disorientation or collision with ground/obstacles when flying under Visual Flight Rules (VFR)?',
      wrongAnswers: ['Getting behind the aircraft.', 'Duck-under syndrome.'],
      correctAnswer: 'Continual flight into instrument conditions.',
    },
    {
      id: 'glider_pilots_ground_school_415',
      question:
        'What is one of the neglected items when a pilot relies on short and long term memory for repetitive tasks?',
      wrongAnswers: ['Situation awareness.', 'Flying outside the envelope.'],
      correctAnswer: 'Checklists.',
    },
    {
      id: 'glider_pilots_ground_school_416',
      question:
        'To meet the recency of experience requirements to act as pilot in command carrying passengers at night, a pilot must have made at least three takeoffs and three landings to a full stop within the preceding 90 days in',
      wrongAnswers: ['the same type of aircraft to be used.', 'any aircraft.'],
      correctAnswer: 'the same category and class of aircraft to be used.',
    },
    {
      id: 'glider_pilots_ground_school_419',
      question:
        'Automatic Terminal Information Service (ATIS) is the continuous broadcast of recorded information concerning',
      wrongAnswers: [
        'pilots of radar-identified aircraft whose aircraft is in dangerous proximity to terrain or to an obstruction.',
        'nonessential information to reduce frequency congestion.',
      ],
      correctAnswer: 'noncontrolled information in selected high-activity terminal areas.',
    },
    {
      id: 'glider_pilots_ground_school_420',
      question: 'The angle between the chord line of an airfoil and the relative wind is known as the angle of',
      wrongAnswers: ['lift.', 'incidence.'],
      correctAnswer: 'attack.',
    },
    {
      id: 'glider_pilots_ground_school_421.',
      question: "Which statement relates to Bernoulli's principle?",
      wrongAnswers: [
        'For every action there is an equal and opposite reaction.',
        'An additional upward force is generated as the lower surface of the wing deflects air downward.',
      ],
      correctAnswer:
        'Air traveling faster over the curved upper surface of an airfoil causes lower pressure on the top surface.',
    },
    {
      id: 'glider_pilots_ground_school_422',
      question: 'If an emergency situation requires a downwind landing, pilots should expect a faster',
      wrongAnswers: [
        'airspeed at touchdown, a longer ground roll, and better control throughout the landing roll.',
        'groundspeed at touchdown, a shorter ground roll, and the likelihood of undershooting the desired touchdown point.',
      ],
      correctAnswer:
        'groundspeed at touchdown, a longer ground roll, and the likelihood of overshooting the desired touchdown point.',
    },
    {
      id: 'glider_pilots_ground_school_423',
      question: "Changes in the center of pressure of a wing affect the aircraft's",
      wrongAnswers: ['lift/drag ratio.', 'lifting capacity.'],
      correctAnswer: 'aerodynamic balance and controllability.',
    },
    {
      id: 'glider_pilots_ground_school_424',
      question: 'When landing behind a large aircraft, which procedure should be followed for vortex avoidance?',
      wrongAnswers: [
        'Stay below and to one side of its final approach flightpath.',
        'Stay well below its final approach flightpath and land at least 2.000 feet behind.',
      ],
      correctAnswer: 'Stay above its final approach flightpath all the way to touchdown.',
    },
    {
      id: 'glider_pilots_ground_school_425',
      question: 'How does the wake turbulence vortex circulate around each wingtip?',
      wrongAnswers: ['Inward, upward, and around each tip.', 'Inward, upward, and counterclockwise.'],
      correctAnswer: 'Outward, upward, and around each tip.',
    },
    {
      id: 'glider_pilots_ground_school_426',
      question: 'The angular difference between true north and magnetic north is',
      wrongAnswers: ['magnetic deviation.', 'compass acceleration error.'],
      correctAnswer: 'magnetic variation.',
    },
    {
      id: 'glider_pilots_ground_school_427',
      question:
        'What should be the indication on the magnetic compass as you roll into a standard rate turn to the right from a south heading in the Northern Hemisphere?',
      wrongAnswers: [
        'The compass will initially indicate a turn to the left.',
        'The compass will remain on south for a short time, then gradually catch up to the magnetic heading of the airplane.',
      ],
      correctAnswer: 'The compass will indicate a turn to the right, but at a faster rate than is actually occurring.',
    },
    {
      id: 'glider_pilots_ground_school_428',
      question:
        'How soon after the conviction for driving while intoxicated by alcohol or drugs shall it be reported to the FAA, Civil Aviation Security Division?',
      wrongAnswers: [
        'No later than 30 working days after the motor vehicle action.',
        'Required to be reported upon renewal of medical certificate.',
      ],
      correctAnswer: 'No later than 60 days after the motor vehicle action.',
    },
    {
      id: 'glider_pilots_ground_school_429',
      question:
        "Where may an aircraft's operating limitations be found if the aircraft has an Experimental or Special light-sport airworthiness certificate?",
      wrongAnswers: ['Attached to the Airworthiness Certificate.', 'In the aircraft airframe and engine logbooks.'],
      correctAnswer: 'In the current, FAA-approved flight manual.',
    },
    {
      id: 'glider_pilots_ground_school_430',
      question:
        'The numbers 8 and 26 on the approach ends of the runway indicate that the runway is orientated approximately',
      wrongAnswers: ['008° and 026° true.', '080° and 260° true.'],
      correctAnswer: '080° and 260° magnetic.',
    },
    {
      id: 'glider_pilots_ground_school_431',
      question:
        'Hazardous attitudes occur to every pilot to some degree at some time. What are some of these hazardous attitudes?',
      wrongAnswers: [
        'Poor risk management and lack of stress management.',
        'Poor situational awareness, snap judgments, and lack of a decision making process.',
      ],
      correctAnswer: 'Antiauthority, impulsivity, macho, resignation, and invulnerability.',
    },
    {
      id: 'glider_pilots_ground_school_432',
      question:
        'In the aeronautical decision making (ADM) process, what is the first step in neutralizing a hazardous attitude?',
      wrongAnswers: ['Making a rational judgment.', 'Recognizing the invulnerability of the situation.'],
      correctAnswer: 'Recognizing hazardous thoughts.',
    },
    {
      id: 'glider_pilots_ground_school_433',
      question:
        'Risk management, as part of the aeronautical decision making (ADM) process, relies on which features to reduce the risks associated with each flight?',
      wrongAnswers: [
        'Application of stress management and risk element procedures.',
        'The mental process of analyzing all information in a particular situation and making a timely decision on what action to take.',
      ],
      correctAnswer: 'Situational awareness, problem recognition, and good judgment.',
    },
    {
      id: 'glider_pilots_ground_school_434',
      question: 'Most midair collision accidents occur during',
      wrongAnswers: ['hazy days.', 'cloudy nights.'],
      correctAnswer: 'clear days.',
    },
    {
      id: 'glider_pilots_ground_school_435',
      question: 'Which statement about longitude and latitude is true?',
      wrongAnswers: [
        'Lines of longitude are parallel to the Equator.',
        'The 0° line of latitude passes through Greenwich, England.',
      ],
      correctAnswer: 'Lines of longitude cross the Equator at right angles.',
    },
    {
      id: 'glider_pilots_ground_school_436',
      question: 'When converting from true course to magnetic heading, a pilot should',
      wrongAnswers: [
        'subtract easterly variation and right wind correction angle.',
        'subtract westerly variation and add right wind correction angle.',
      ],
      correctAnswer: 'add westerly variation and subtract left wind correction angle.',
    },
    {
      id: 'glider_pilots_ground_school_437',
      question:
        'When a control tower, located on an airport within Class D airspace, ceases operation for the day, what happens to the airspace designation?',
      wrongAnswers: [
        'The airspace designation normally will not change.',
        'The airspace remains Class D airspace as long as a weather observer or automated weather system is available.',
      ],
      correctAnswer:
        'The airspace reverts to Class E or a combination of Class E and G airspace during the hours the tower is not in operation.',
    },
    {
      id: 'glider_pilots_ground_school_438',
      question:
        'With certain exceptions, Class E airspace extends upward from either 700 feet or 1,200 feet AGL to, but does not include,',
      wrongAnswers: ['10,000 feet MSL.', '14,500 feet MSL.'],
      correctAnswer: '18,000 feet MSL.',
    },
    {
      id: 'glider_pilots_ground_school_439',
      question: 'Flight through a restricted area should not be accomplished unless the pilot has',
      wrongAnswers: [
        'filed an IF flight plan.',
        'received prior permission from the commanding officer of the nearest military base.',
      ],
      correctAnswer: 'received prior authorization from the controlling agency.',
    },
    {
      id: 'glider_pilots_ground_school_440',
      question:
        'As standard operating practice, all inbound traffic to an airport without a control tower should continuously monitor the appropriate facility from a distance of',
      wrongAnswers: ['25 miles.', '20 miles.'],
      correctAnswer: '10 miles.',
    },
    {
      id: 'glider_pilots_ground_school_442',
      question: 'What does and inbound destination sign indicate?',
      wrongAnswers: [
        'Defines direction and designation of exit taxiway from runway.',
        'Identifies runway on which the aircraft is located.',
      ],
      correctAnswer: 'Defines directions for arriving aircraft.',
    },
    {
      id: 'glider_pilots_ground_school_443',
      figures: ['sport_rec_private_akts_figure_65.png'],
      question: 'The inbound destination sign is figure',
      wrongAnswers: ['D', 'K'],
      correctAnswer: 'I',
    },
    {
      id: 'glider_pilots_ground_school_444',
      figures: ['sport_rec_private_akts_figure_65.png'],
      question: 'The taxiway direction sign is figure',
      wrongAnswers: ['F', 'J'],
      correctAnswer: 'K',
    },
    {
      id: 'glider_pilots_ground_school_445',
      question: 'What is indicated when a current CONVECTIVE SIGMET forecasts thunderstorms?',
      wrongAnswers: [
        'Moderate thunderstorms covering 30 percent of the area,',
        'Thunderstorms obscured by massive cloud layers.',
      ],
      correctAnswer: 'Moderate or severe turbulence.',
    },
    {
      id: 'glider_pilots_ground_school_446',
      figures: ['sport_rec_private_akts_figure_20.png'],
      question:
        '(Refer to area 1.) What minimum radio equipment is required to land and take off at Norfolk International?',
      wrongAnswers: ['Mode C transponder and omni receiver.', 'Mode C transponder, omni receiver, and DME'],
      correctAnswer: 'Mode C transponder and two-way radio.',
      hint: 'See page 29 for the minimum radio equipment required for operation within Class C airspace.',
    },
    {
      id: 'glider_pilots_ground_school_447',
      figures: ['sport_rec_private_akts_figure_65.png'],
      question: 'Which airport marking is a runway safety area/obstacle free zone boundary?',
      wrongAnswers: ['H', 'N'],
      correctAnswer: 'G',
    },
    {
      id: 'glider_pilots_ground_school_448',
      question: 'What is the purpose of the No Entry sign?',
      wrongAnswers: [
        'Identifies the exit boundary for the runway protected area',
        'Identifies area that does not continue beyond intersection.',
      ],
      correctAnswer: 'Identifies a paved area where aircraft are prohibited from entering.',
    },
    {
      id: 'glider_pilots_ground_school_449',
      question:
        'When turning onto a taxiway from another taxiway, what is the purpose of the taxiway directional sign?',
      wrongAnswers: [
        'Indicates direction to take-off runway.',
        'Indicates designation and direction of exit taxiway from runway.',
      ],
      correctAnswer: 'Indicates designation and direction of taxiway leading out of an intersection',
    },
    {
      id: 'glider_pilots_ground_school_451',
      question: 'If your glider is equipped with 4096 code radar beacon transponder, the code for normal operation is',
      wrongAnswers: ['1200.', '7700.'],
      correctAnswer: '1202.',
    },
    {
      id: 'glider_pilots_ground_school_452',
      question: 'When making transponder code changes, pilots should avoid inadvertent selection of which code?',
      wrongAnswers: ['7200.', '7000.'],
      correctAnswer: '7500.',
    },
    {
      id: 'glider_pilots_ground_school_453',
      question: 'Pre-takeoff briefing of passengers for a flight is the responsibility of',
      wrongAnswers: ['all passengers.', 'a crewmember.'],
      correctAnswer: 'the pilot.',
    },
    {
      id: 'glider_pilots_ground_school_454',
      figures: ['sport_rec_private_akts_figure_20.png'],
      question: '(Refer to area 1.) The NALF Fentress (NFE) Airport is in what type of airspace?',
      wrongAnswers: ['Class C.', 'Class G.'],
      correctAnswer: 'Class E.',
    },
    {
      id: 'glider_pilots_ground_school_455',
      question: 'Deviation error of the magnetic compass is caused by',
      wrongAnswers: ['northerly turning error.', 'the difference in location of true north and magnetic north'],
      correctAnswer: 'certain metals and electrical systems within the aircraft.',
    },
    {
      id: 'glider_pilots_ground_school_456',
      figures: ['sport_rec_private_akts_figure_64.png'],
      question: 'Which figure indicates a vehicle lane?',
      wrongAnswers: ['A', 'E'],
      correctAnswer: 'C',
    },
    {
      id: 'glider_pilots_ground_school_457',
      question: 'The "yellow demarcation bar" marking indicates',
      wrongAnswers: [
        'a hold line from a taxiway to a runway.',
        'the beginning of available runway for landing on the approach side.',
      ],
      correctAnswer: 'runway with a displaced threshold that precedes the runway.',
    },
    {
      id: 'glider_pilots_ground_school_458',
      question: 'When speaking to an AFSS weather briefer, you should state',
      wrongAnswers: ["the pilot -in-command's full name and address", 'a summary of your qualifications'],
      correctAnswer: 'whether the flight is VFR or IFR',
    },
    {
      id: 'glider_pilots_ground_school_459',
      question:
        'To best determine general aviation forecast weather conditions covering a flight information region, the pilot should refer to',
      wrongAnswers: ['Weather Depiction Charts.', 'Satellite maps.'],
      correctAnswer: 'Graphical Forecasts for Aviation (GFA)',
    },
    {
      id: 'glider_pilots_ground_school_460',
      question:
        'Some Advisory Circulars (ACs) are available free of charge while the remaining ACs must be purchased. All aviation ACs may be obtained by following the procedures in the AC Checklist (AC 00-2) or by',
      wrongAnswers: [
        'Contacting the local airport Fixed Base Operator and requesting the desired AC.',
        'reading the ACs in the Aeronautical Information Manual (AIM).',
      ],
      correctAnswer: 'referring to the FAA internet home page and following the links to the ACs.',
    },
    {
      id: 'glider_pilots_ground_school_461',
      question: 'What causes variations in altimeter settings between weather reporting points?',
      wrongAnswers: ['Coriolis force.', 'Variation of terrain elevation.'],
      correctAnswer: "Unequal heating of the Earth's surface.",
    },
    {
      id: 'glider_pilots_ground_school_462',
      figures: ['sport_rec_private_akts_figure_23.png', 'sport_rec_private_akts_legend_1.png'],
      question: '(Refer to area 3) For information about parachute jumping operations at Tri-County Airport, refer to',
      wrongAnswers: ['notes on the border of the chart.', 'the Notice to Air Mission (NOTAM) publication.'],
      correctAnswer: 'Chart Supplement.',
    },
  ];

  return shuffle(data);
};
