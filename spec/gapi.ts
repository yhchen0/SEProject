import moment from 'moment';
import { makeCalendar } from '../src/shared/gapi';
const token = "ya29.a0AfH6SMARf3--fo57AllkZf_mqdgypGAvjmh-Bhp19g_HbD_WuRQ9jwJfxdSmUG-aLeIBWIXKxF8XpoCu3OPBN8wk8FhwUWRcawbxIlTFmSyc0zaEybWTFQacbhooVBObRYh20u80luBCdO7oxdyW22TXDdQS_lKw7o3CHad4DQA"

console.log(moment(1610114931446).toJSON());
makeCalendar(token as string, {
     summary: 'A',
     location: 'ROOM1',
     description: 'description',
     startTime: moment(1610114931446).toJSON(),
     endTime: moment(1610114931446 + 3600000).toJSON()
})
.then( res => console.log(res.data))
.catch( e => console.log(e));