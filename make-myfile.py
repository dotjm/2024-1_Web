import os

# 지정한 폴더 경로 (예시 경로입니다, 실제 경로로 변경해야 합니다)
folder_path = './lecture-6-240408/homework/'

# 파일명 뒤에 추가할 특정 텍스트
additional_text = '-202334748-정지민'

# 폴더 내의 모든 파일을 순회하면서 확장자가 .html인 파일 찾기
for filename in os.listdir(folder_path):
    if filename.endswith('.html'):
        # 원본 파일명에서 확장자를 제외한 부분과 확장자를 분리
        base, extension = os.path.splitext(filename)
        # 새로운 파일명 생성
        new_filename = f'{base}{additional_text}{extension}'

        # print(new_filename)
        # 파일명 변경
        os.rename(os.path.join(folder_path, filename), os.path.join(folder_path, new_filename))

# 변경된 파일명을 확인하려면 아래 코드의 주석을 해제하세요.
for filename in os.listdir(folder_path):
    print(filename)
