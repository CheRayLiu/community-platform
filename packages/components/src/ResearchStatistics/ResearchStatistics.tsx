import { Text, Flex } from 'theme-ui'
import { Icon } from '..'

export interface IProps {
  viewCount: number
  followingCount: number
  usefulCount: number
  commentCount: number
  updateCount: number
}

const ICON_OPACITY = '0.5'

export const ResearchStatistics = (props: IProps) => (
  <Flex py={1} sx={{ alignItems: 'center', justifyContent: 'center', gap: 2 }}>
    <Flex
      data-cy={'ViewStatsCounter'}
      px={2}
      py={1}
      mb={1}
      sx={{
        alignItems: 'center',
        fontSize: 0.5,
      }}
    >
      <Icon glyph={'view'} mr={1} size={'md'} opacity={ICON_OPACITY} />
      <Text>
        {props.viewCount}
        {props.viewCount > 1 ? ' views' : ' view'}
      </Text>
    </Flex>

    <Flex
      data-cy={'FollowingStatsCounter'}
      px={2}
      py={1}
      mb={1}
      sx={{
        alignItems: 'center',
        fontSize: 0.5,
      }}
    >
      <Icon
        glyph={'thunderbolt'}
        pt={0.5}
        mr={1}
        size={'sm'}
        opacity={ICON_OPACITY}
      />
      <Text>
        {props.followingCount}
        {' following'}
      </Text>
    </Flex>

    <Flex
      data-cy={'UsefulStatsCounter'}
      px={2}
      py={1}
      mb={1}
      sx={{
        alignItems: 'center',
        fontSize: 0.5,
      }}
    >
      <Icon glyph={'star'} mr={1} size={'sm'} opacity={ICON_OPACITY} />
      <Text>
        {props.usefulCount}
        {'  useful'}
      </Text>
    </Flex>

    <Flex
      data-cy={'CommentStatsCount'}
      px={2}
      py={1}
      mb={1}
      sx={{
        alignItems: 'center',
        fontSize: 0.5,
      }}
    >
      <Icon glyph={'comment'} mr={1} size={'sm'} opacity={ICON_OPACITY} />
      <Text>
        {props.commentCount}
        {props.commentCount > 1 ? ' comments' : ' comment'}
      </Text>
    </Flex>

    <Flex
      data-cy={'UpdateStatsCounter'}
      px={2}
      py={1}
      mb={1}
      sx={{
        alignItems: 'center',
        fontSize: 0.5,
      }}
    >
      <Icon glyph={'update'} mr={1} size={'sm'} opacity={ICON_OPACITY} />
      <Text>
        {props.updateCount}
        {props.updateCount > 1 ? ' updates' : ' update'}
      </Text>
    </Flex>
  </Flex>
)
