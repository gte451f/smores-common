import innerJoin from '../../../utils/inner-join';
import { module, test } from 'qunit';

module('Unit | Utility | inner join');

// Replace this with your real tests.
test('it works', function(assert) {
  var userProfiles = [
    {id: 1, name: "Ashok"},
    {id: 2, name: "Amit"},
    {id: 3, name: "Rajeev"}
  ];

  var questions = [
    {id: 1, text: "text1", createdBy: 2},
    {id: 2, text: "text2", createdBy: 2},
    {id: 3, text: "text3", createdBy: 1},
    {id: 4, text: "text4", createdBy: 2},
    {id: 5, text: "text5", createdBy: 3},
    {id: 6, text: "text6", createdBy: 3}
  ];

  //This is how you would use it:

  var c = innerJoin(userProfiles, questions, function (userProfile, question) {
    if (question.createdBy === userProfile.id) {
      return {
        id: question.id,
        text: question.text,
        name: userProfile.name
      };
    }
  });
  assert.equal(c.length, 6);
  assert.deepEqual(c[0], {id:3, text: 'text3', name: 'Ashok'}, 'first object is not expected');
});
