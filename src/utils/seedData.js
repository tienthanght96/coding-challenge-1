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
      index_album: i,
      title: faker.name.title(),
      date: faker.date.recent().toLocaleDateString(),
      description: faker.lorem.sentences(),
      isFavorite: faker.random.boolean(),
      photos: generateListPhotos(faker.random.number({ min: 0, max: 30 }), album_id)
    };
    listAblums.push(album);
  }
  return listAblums;
}

export function getLastIndex(array, property) {
  const last_index = Math.max(...array.map(ele => ele[property]));
  if(last_index >= 0) {
    return last_index;
  }
  return -1;
}

export function generateListPhotos(totalPhotos, album_id) {
  return Array.from(Array(totalPhotos).keys()).map((index)=> {
    const photo = {
      id: `${album_id}_photo_${index}`,
      album_id: album_id,
      index_photo: index,
      imageUrl: faker.random.image(),
      caption: faker.lorem.sentences(),
      isLike: faker.random.boolean(),
      date: faker.date.recent().toLocaleDateString(),
      tags: generateListTags(),
      checkboxes: generateCheckboxesPhoto()
    };
    return photo;
  });
}

export function generateNewAlbum(album_data, last_index) {
  const album_id = 'album_' + (last_index + 1);
  const album = {
    id: album_id,
    index_album: (last_index + 1),
    title: album_data.title,
    date: faker.date.recent().toLocaleDateString(),
    description: '',
    isFavorite: false,
    photos: [
      generateNewPhoto(album_id, -1, album_data.imageUrl)
    ]
  };
  return album;
}

export function generateNewPhoto(album_id, last_index, imageUrl) {
  const photo = {
    id: `${album_id}_photo_${last_index + 1}`,
    album_id: album_id,
    index_photo: last_index + 1,
    imageUrl: imageUrl,
    caption: '',
    tags: generateListTags(),
    checkboxes: generateCheckboxesPhoto(),
    isLike: false,
    date: faker.date.recent().toLocaleDateString(),
  };
  return photo;
}

export function generateListTags() {
  return Array.from(Array(faker.random.number({ min: 0, max: 20 })).keys()).map(t => ({
    code: faker.random.uuid(),
    name: faker.random.word()
  }));
}

export function generateCheckboxesPhoto() {
  return Array.from(Array(faker.random.number({ min: 0, max: 7 })).keys()).map(t => ({
    code: faker.random.uuid(),
    name: faker.random.words(),
    checked: faker.random.boolean()
  }));
}