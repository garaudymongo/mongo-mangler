pipeline = [
    {"$set": {
        "name.first": fakeFirstName(),                                                         // Random first name
        "name.middle": fakeFirstName(),                                                        // Random middle name
        "name.last": fakeLastName(),                                                           // Random last name
        "gender": fakeValueFromList(["one","two","three","four"]),                             // Random gender from 4 values
        "age": fakePaddedNumberAsText(2),
        "race": fakeValueFromListWeighted (["NATIVE HAWAIIAN OR PACIFIC ISLANDER","NATIVE AMERICAN OR ALASKA NATIVE",
        	"SOME OTHER RACE","TWO OR MORE RACES","ASIAN","BLACK OR AFRICAN AMERICAN","HISPANIC AND LATINO","WHITE"]),
        "marital_status": fakeValueFromList(["MARRIED", "SINGLE", "DIVORCED", "OTHER"]), 
        "legal_status": fakeValueFromListWeighted(["UNKOWN","VISA","PERMANENT_RESIDENT","CITIZEN"]),
        "dependent_count": fakeNumberBounded(0,5),
        "education_level": fakeValueFromListWeighted(["UNKOWN","UNEDUCATED","HIGH SCHOOL","COLLEGE","GRADUATE"]),
        "income_category": fakeValueFromList (["LESS THAN $40K","40K TO 80K","80K TO 150K", "150K+"]),
        "home_ownership": fakeValueFromList(["OWN", "MORTGAGE", "RENT"]),
        "employment_status": fakeValueFromListWeighted(["UNEMPLOYED","OTHER","RETIRED","EMPLOYED"]),
        "employment_industry": fakeValueFromList(["FINANCE", "TECHNOLOGY", "HEALTHCARE", "EDUCATION", "GOVERNMENT", "OTHER"]),
        "employment_position": fakeValueFromListWeighted(["EXECUTIVE", "OTHER", "MANAGER", "EMPLOYEE"]),
        "employment_length": fakeValueFromListWeighted(["LESS THAN 1 YEAR", "1-5 YEARS", "5-10 YEARS", "10+ YEARS"]),
        "credit_score": fakeNumberBounded(350, 850),
        "card_number": fakePaddedNumberAsText(16),                                             // 16 digit textual credit card number
        "card_start": fakeDateBeforeNow(2*365*24*60*60*1000),                                  // Up to 2 years before now
        "card_expiry": fakeDateAfterNow(365*24*60*60*1000),                                    // Up to 1 year after now
        "rank": fakeNumber(10),                                                                // Any number up to 10 digits in size
        "reported": fakeBoolean(),                                                             // True of False - 50:50
        "returns": fakeBooleanWeighted(5),                                                     // 5% time True, rest of time False          
        "flagged": fakeBooleanWeighted(15),                                                    // 15% time True, rest of time False
        "interestRate": fakeDecimal(),                                                         // Random decimal number between 0.0 and 1.0
        "balance": fakeDecimalSignificantPlaces(8),                                            // Random decimal number to 8 significant places
        "Limit_balance": fakeDecimalSignificantPlaces(9),
        "recent_payment": 	fakeDecimalSignificantPlaces(7),
        "payment_status": fakeValueFromList(["New","Void","refunded"]),							   
        "auto_pay": fakeBooleanWeighted(35),
        "probability_of_default": fakeDecimal(),
        "cardType": fakeValueFromList(["CREDIT", "DEBIT", "VOUCHER"]),                         // Randomly set to one of CREDIT | DEBIT | VOUCHER
        //"classification": fakeValueFromListWeighted(["A+", "B", "C", "D"]),                  // Random value more likely from later part of list - COMMENTED OUT AS ONLY WORKS IN MDB 5.0+
        "phone_number": fakePaddedNumberAsText(10),
        "address.number": fakeNumberBounded(1, 99),                                            // Random house number between 1-99
        "address.street": fakeStreetName(),                                                    // Random street name         
        "address.town": fakeTownName(),                                                        // Random town name         
        "address.country": fakeCountryName(),                                                  // Random country name
        "address.zipcode": fakeZipCode(),                                                      // Random zip code
        "safe_location": fakeLocationWithCoordinates(),                                        // Random place with name, id and geo coordinates
        "records": fakeListOfSubDocs(4, ["BLUE", "RED", "GREEN", "PURPLE", "ORANGE", "PINK"]), // Array of 4 random subdocuments
        "attrition_flag": fakeBooleanWeighted(15),
        "newfieldname": 'a'*30000                                                            // each letter takes 1 byte
            }
    }
]
