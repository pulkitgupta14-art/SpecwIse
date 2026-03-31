import { getRecommendations } from './lib/recommendation';
async function test() {
  const recs = await getRecommendations(60000, ['daily']);
  const selectedPhones = [recs[0].phone, recs[1].phone];
  console.log('Selected Phone 1 pros:', typeof selectedPhones[0].pros, Array.isArray(selectedPhones[0].pros));
  console.log('Selected Phone 2 pros:', typeof selectedPhones[1].pros, Array.isArray(selectedPhones[1].pros));
}
test().catch(console.error);
