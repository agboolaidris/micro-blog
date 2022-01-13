import {
  MouseEvent,
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { EditorState } from 'draft-js';
import Image from 'next/image';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, {
  defaultSuggestionsFilter,
  MentionData,
  MentionPluginTheme,
} from '@draft-js-plugins/mention';
import mentions from '../../fixtures/mentions';
import { Avatar, Box, Typography, Button, Divider } from '@mui/material';
import styled from '@emotion/styled';
import { Theme, useTheme, alpha } from '@mui/material/styles';
import mentionsStyles from '../../styles/MentionsStyles.module.css';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';

const EditorWrap = styled(Box)<{ theme?: Theme }>`
  cursor: text;
  max-width: 100%;
  min-height: 150px;
  max-height: 400px;
  margin: 20px 0;
  cursor: text;
  padding: 16px;
  overflow: auto;
  position: 'relative';

  .editor :global(.public-DraftEditor-content) {
    min-height: 140px;
    background-color: pink;
  }
`;

const MentionListWrap = styled(Box)<{ theme?: Theme }>`
  display: flex;
  align-items: center;
  padding: 10px;
  &:hover {
    background: ${({ theme }) => alpha(theme.colors.toolbar, 0.1)};
  }
`;

export interface EntryComponentProps {
  className?: string;
  onMouseDown(event: MouseEvent): void;
  onMouseUp(event: MouseEvent): void;
  onMouseEnter(event: MouseEvent): void;
  role: string;
  id: string;
  'aria-selected'?: boolean | 'false' | 'true';
  theme?: MentionPluginTheme;
  mention: MentionData;
  isFocused: boolean;
  searchValue?: string;
}

function Entry(props: EntryComponentProps): ReactElement {
  const {
    mention,
    theme,
    searchValue, // eslint-disable-line @typescript-eslint/no-unused-vars
    isFocused, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...parentProps
  } = props;

  return (
    <MentionListWrap {...parentProps}>
      {mention.avatar && (
        <Avatar className={theme?.mentionSuggestionsEntryAvatar}>
          <Image src={mention.avatar} alt={mention.name} layout="fill" />
        </Avatar>
      )}
      <Box sx={{ marginLeft: '10px' }}>
        <Typography variant="subtitle2">{mention.name}</Typography>
        <Typography sx={{ fontSize: '13px' }}>{mention.title}</Typography>
      </Box>
    </MentionListWrap>
  );
}

interface Props {
  onClose: () => void;
}

export default function CustomMentionEditor({ onClose }: Props): ReactElement {
  const ref = useRef<Editor>(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(mentions);
  const theme = useTheme();

  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin({
      entityMutability: 'IMMUTABLE',
      mentionPrefix: '@',
      supportWhitespace: true,
      theme: mentionsStyles,
    });
    // eslint-disable-next-line no-shadow
    const { MentionSuggestions } = mentionPlugin;
    // eslint-disable-next-line no-shadow
    const plugins = [mentionPlugin];
    return { plugins, MentionSuggestions };
  }, []);

  const onChange = useCallback((_editorState: EditorState) => {
    setEditorState(_editorState);
  }, []);

  const onOpenChange = useCallback((_open: boolean) => {
    setOpen(_open);
  }, []);
  const onSearchChange = useCallback(({ value }: { value: string }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions));
  }, []);

  return (
    <>
      <EditorWrap onClick={() => ref.current!.focus()}>
        <Editor
          editorKey={'editor'}
          editorState={editorState}
          onChange={onChange}
          plugins={plugins}
          ref={ref}
          placeholder="what's is on your mind, Idris?"
        />
        <MentionSuggestions
          open={open}
          onOpenChange={onOpenChange}
          suggestions={suggestions}
          onSearchChange={onSearchChange}
          onAddMention={() => {
            // get the mention object selected
          }}
          entryComponent={Entry}
          popoverContainer={({ children }) => (
            <Box
              sx={{
                width: 'max-content',
                backgroundColor: theme.colors.background,
              }}
            >
              {children}
            </Box>
          )}
        />
      </EditorWrap>
      <Divider sx={{ marginY: '10px' }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box>
          <Button
            sx={{ color: theme.palette.grey[600] }}
            startIcon={
              <VideoCameraBackIcon
                sx={{ color: theme.palette.secondary.light }}
              />
            }
          >
            Live Video
          </Button>
          <Button
            sx={{ color: theme.palette.grey[600] }}
            startIcon={
              <ImageIcon sx={{ color: theme.palette.warning.light }} />
            }
          >
            Photo / Video
          </Button>
          <Button
            sx={{ color: theme.palette.grey[600] }}
            startIcon={
              <EmojiEmotionsIcon sx={{ color: theme.palette.error.light }} />
            }
          >
            Feeling / Activities
          </Button>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Button variant="contained" onClick={onClose}>
          Post
        </Button>
      </Box>
    </>
  );
}
