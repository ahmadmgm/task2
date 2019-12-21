var app2 = new Vue({
  el: '#mainApp',
  data: {
    sortByYear: '',
    careerLevel: '',
    major: '',
    jobTitle: '',
    keywords: '',
    candidateData: {
      "data": [
        {
          "id": "IvV2eM3TnFb2X5J7nlW35g",
          "type": "candidates",
          "attributes": {
            "yearsOfExperince": 10,
            "skills": ['asp', 'php', 'java', 'oracle'],
            "first_name": "Peter",
            "last_name": "Smith",
            "email": "petesmith29@example.org",
            "created_on": "2015-12-01T12:00:16.000Z",
            "updated_on": "2015-12-01T12:00:16.000Z",
            "home_phone": "555-555-5555",
            "home_street1": "104 Example St",
            "home_street2": "Apt. 2",
            "home_city": "Exampletown",
            "home_state": "CA",
            "home_postal_code": "94000",
            "home_country": "US",
            "source": "user",
            "source_detail": null,
            "profile_links": [
              {
                "url": "https://www.facebook.com/PeterSmithExample",
                "type": "facebook"
              },
              {
                "url": "https://twitter.com/PeterSmithExample",
                "type": "twitter"
              }
            ],
            "careerLevel": [
              "senior"
            ],
            "schools": [
              {
                "degree_type": "master",
                "degree_major": "computer science",
                "name": "King's College London",
                "graduation_year": "1952"
              }
            ],
            "employers": [
              {
                "employer_name": "Computer Enterprise",
                "titles": [
                  {
                    "start_year": 2010,
                    "end_year": 2014,
                    "title": "backend"
                  }
                ]
              }
            ],
            "source_referral_email": null,
            "source_referral_first_name": null,
            "source_referral_last_name": null
          },
          "relationships": {
            "source_user": {
              "data": {
                "id": "aU0UzeSUur6Ak63kKeJOM4",
                "type": "users"
              }
            },
            "primary_resume": {
              "data": {
                "id": "5aIc9hJH9ru8LgvhuitM_g",
                "type": "documents"
              }
            },
            "candidate_emails": {
              "data": [

              ]
            }
          },

          "links": {
            "notes": {
              "href": "/v1/candidates/IvV2eM3TnFb2X5J7nlW35g/notes"
            },
            "assignments": {
              "href": "/v1/candidates/IvV2eM3TnFb2X5J7nlW35g/assignments"
            }
          }
        },
        {
          "id": "TYbRbNaTBB0jp3uFWsuOaQ",
          "type": "candidates",
          "attributes": {
            "yearsOfExperince": 6,
            "skills": ['CSS', 'JavaScript', 'HTML5', 'Vue.js', 'asp'],
            "first_name": "François",
            "last_name": "Higgs",
            "email": "f_higgs@example.org",
            "created_on": "2015-09-12T16:15:04.000Z",
            "updated_on": "2015-09-12T16:15:04.000Z",
            "home_phone": "555-555-5555",
            "home_street1": "101 Demonstration St",
            "home_street2": "",
            "home_city": "Sometown",
            "home_state": "CA",
            "home_postal_code": "95000",
            "home_country": "US",
            "source": "other",
            "source_detail": "Read article about him.",
            "profile_links": [
              {
                "url": "https://www.facebook.com/FHiggsExample",
                "type": "facebook"
              },
              {
                "url": "https://twitter.com/Official_Higgs_Example",
                "type": "twitter"
              }
            ],
            "careerLevel": [
              "intermediate"
            ],
            "schools": [
              {
                "degree_type": "Doctor",
                "degree_major": "data science",
                "name": "Université Libre de Bruxelles",
                "graduation_year": "1977"
              }
            ],
            "employers": [
              {
                "employer_name": "Gravity Inc",
                "titles": [
                  {
                    "start_year": 2007,
                    "end_year": null,
                    "title": "frontend"
                  }
                ]
              }
            ],
            "source_referral_email": null,
            "source_referral_first_name": null,
            "source_referral_last_name": null
          },
          "relationships": {
            "primary_resume": {
              "data": null
            },
            "candidate_emails": {
              "data": [

              ]
            }
          },
          "links": {
            "notes": {
              "href": "/v1/candidates/TYbRbNaTBB0jp3uFWsuOaQ/notes"
            },
            "assignments": {
              "href": "/v1/candidates/TYbRbNaTBB0jp3uFWsuOaQ/assignments"
            }
          }
        }, {
          "id": "TYbRbNaTBB0jp3uFWsuOaQ",
          "type": "candidates",
          "attributes": {
            "yearsOfExperince": 2,
            "skills": ['photpshop', 'finalcut', 'maya', 'HTML5'],
            "first_name": "François",
            "last_name": "Higgs",
            "email": "f_higgs@example.org",
            "created_on": "2015-09-12T16:15:04.000Z",
            "updated_on": "2015-09-12T16:15:04.000Z",
            "home_phone": "555-555-5555",
            "home_street1": "101 Demonstration St",
            "home_street2": "",
            "home_city": "Sometown",
            "home_state": "CA",
            "home_postal_code": "95000",
            "home_country": "US",
            "source": "other",
            "source_detail": "Read article about him.",
            "profile_links": [
              {
                "url": "https://www.facebook.com/FHiggsExample",
                "type": "facebook"
              },
              {
                "url": "https://twitter.com/Official_Higgs_Example",
                "type": "twitter"
              }
            ],
            "careerLevel": [
              "junior"
            ],
            "schools": [
              {
                "degree_type": "Bsc",
                "degree_major": "graphic design",
                "name": "Université Libre de Bruxelles",
                "graduation_year": "1988"
              }
            ],
            "employers": [
              {
                "employer_name": "Gravity Inc",
                "titles": [
                  {
                    "start_year": 2007,
                    "end_year": null,
                    "title": "designer"
                  }
                ]
              }
            ],
            "source_referral_email": null,
            "source_referral_first_name": null,
            "source_referral_last_name": null
          },
          "relationships": {
            "primary_resume": {
              "data": null
            },
            "candidate_emails": {
              "data": [

              ]
            }
          },
          "links": {
            "notes": {
              "href": "/v1/candidates/TYbRbNaTBB0jp3uFWsuOaQ/notes"
            },
            "assignments": {
              "href": "/v1/candidates/TYbRbNaTBB0jp3uFWsuOaQ/assignments"
            }
          }
        }
      ],
      "links": {
        "self": "https://api.jobscore.com/v1/candidates?page%5Bnumber%5D=1&page%5Bsize%5D=2",
        "first": "https://api.jobscore.com/v1/candidates?page%5Bnumber%5D=1&page%5Bsize%5D=2",
        "prev": null,
        "next": "https://api.jobscore.com/v1/candidates?page%5Bnumber%5D=2&page%5Bsize%5D=2",
        "last": "https://api.jobscore.com/v1/candidates?page%5Bnumber%5D=2&page%5Bsize%5D=2"
      },
      "meta": {
        "pagination": {
          "resources": 3,
          "pages": 2
        }
      }
    },

  },
  computed: {
    filteredCandid() {

      var self = this;
      if (this.careerLevel !== '') {
        return this.candidateData.data.filter(function (data) {
          return self.careerLevel == data.attributes.careerLevel[0];
        });
      } else if (this.major !== '') {
        return this.candidateData.data.filter(function (data) {
          return self.major == data.attributes.schools[0].degree_major;
        });
      } else if (this.jobTitle !== '') {
        return this.candidateData.data.filter(function (data) {
          return self.jobTitle == data.attributes.employers[0].titles[0].title;
        });
      } else if (this.keywords !== '') {
        return this.candidateData.data.filter(function (data) {
          return data.attributes.skills.find(function (element) {
            return self.keywords == element;
          });
        });
      } else {
        return this.candidateData.data;
      }
    }
  },
  methods: {
    sortDataByYears: function (type) {
      console.log(type);
      if (type === 'sort') {
        this.sortByYear = 'sort';
      }else if(type==='default'){
        this.sortByYear = 'default';
      }
    }
  },
  mounted() {
  }

})