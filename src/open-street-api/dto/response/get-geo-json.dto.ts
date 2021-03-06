import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class GetGeoJSONResponseDto {
  @IsString()
  @ApiProperty({
    description: 'type',
    example: `FeatureCollection`,
    type: String,
  })
  type: string;

  @ApiProperty({
    description: 'features',
    example: [
      {
        type: 'Feature',
        id: 'node/269538499',
        properties: {
          timestamp: '2022-01-08T14:29:59Z',
          version: 42,
          changeset: 115911952,
          user: 'Aranc',
          uid: 9475258,
          'alt_name:en_1': 'Geographic North Pole',
          'alt_name:en_2': 'Terrestrial North Pole',
          'alt_name:en_3': 'True North Pole',
          'alt_name:tr': 'Kuzey Kutup Noktası',
          'alt_name:vi': 'Cực Bắc',
          name: 'North Pole',
          'name:af': 'Noordpool',
          'name:ast': 'Polu Norte',
          'name:ba': 'Төньяҡ ҡотоп',
          'name:cs': 'Severní pól',
          'name:da': 'Nordpolen',
          'name:de': 'Nordpol',
          'name:en': 'North Pole',
          'name:eo': 'Norda poluso',
          'name:es': 'polo norte',
          'name:et': 'Põhjapoolus',
          'name:fi': 'Pohjoisnapa',
          'name:fr': 'Pôle Nord',
          'name:he': 'הקוטב הצפוני',
          'name:hr': 'Sjeverni pol',
          'name:ia': 'Polo Nord',
          'name:io': 'Norda Polo',
          'name:it': 'Polo artico',
          'name:lfn': 'Polo Norde',
          'name:lt': 'Šiaurės ašigalis',
          'name:nl': 'Noordpool',
          'name:pl': 'Biegun północny',
          'name:pt': 'Polo Norte',
          'name:ru': 'Се́верный по́люс',
          'name:sk': 'Severný pól',
          'name:sl': 'Severni tečaj',
          'name:sv': 'Nordpolen',
          'name:tr': 'Kuzey Kutbu',
          'name:tt': 'Төньяк котып',
          'name:uk': 'Північний полюс',
          'name:vi': 'Bắc Cực',
          'name:vo': 'Pov Nolüdik',
          'name:zh': '北极点',
          'name:zh-Hans': '北极点',
          'name:zh-Hant': '北極點',
          place: 'locality',
          population: '0',
          wikidata: 'Q934',
          wikipedia: 'en:North Pole',
          'wikipedia:tr': 'Kuzey Kutbu',
          id: 'node/269538499',
        },
        geometry: {
          type: 'Point',
          coordinates: [0, 90],
        },
      },
    ],
    type: [],
  })
  @IsArray()
  features: [];
}
