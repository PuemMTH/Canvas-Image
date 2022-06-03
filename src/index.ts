import { drawImage, Text } from './image';

let ListText: Text[] = [
    {
        text: 'ชื่อผู้ใช้งาน: นาย ธนภัทร เอี่ยมอาจ',
        color: '#ff0037',
    },
    {
        text: 'รหัสนิสิต: 6421600093',
        color: '#524e4f',
    },
    {
        text: 'สาขา: วิทยาการคอมพิวเตอร์',
        color: '#524e4f',
    },
    {
        text: 'คณะสังกัด: ศิลปศาสตร์และวิทยาศาสตร์',
        color: '#524e4f',
    }
]
new drawImage(1920, 1080).saveImage(`./image/logs/${new Date().getTime()}.png`, '100px 2005_iannnnnGMO', ListText);