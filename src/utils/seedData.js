import faker from 'faker'

export function generateListAlbums (total) {
  if(typeof total !== 'number' || !total) {
    return [];
  }
  const listAblums = [];
  for(let i = 1; i <= total; i ++) {
    const album_id = 'album_' + i;
    const album = {
      id: album_id,
      title: faker.name.title(),
      date: faker.date.recent(),
      description: faker.lorem.sentences(),
      isFavorite: faker.random.boolean(),
      photos: generateListPhotos(faker.random.number({ min: 0, max: 30 }), album_id)
    };
    listAblums.push(album);
  }
  return listAblums;
}

export function generateListPhotos(totalPhotos, album_id) {
  return Array.from(Array(totalPhotos).keys()).map((index)=> {
    const photo = {
      id: `${album_id}_photo_${index}`,
      album_id: album_id,
      imageUrl: faker.random.image(),
      caption: '',
      tags: faker.lorem.words().split(' '),
      isLike: faker.random.boolean(),
      date: faker.date.recent(),
    };
    return photo;
  });
}